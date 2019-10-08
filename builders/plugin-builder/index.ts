import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { BrowserBuilderOutput, executeBrowserBuilder, ExecutionTransformer } from '@angular-devkit/build-angular';
import { JsonObject } from '@angular-devkit/core';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as webpack from 'webpack';

/**
 * Custom template definition for the builder
 *
 * @interface Options
 * @extends {JsonObject}
 */
interface Options extends JsonObject {
  /**
   * A string of the form `path/to/file#exportName` that acts as a path to include to bundle
   */
  modulePath: string;

  /**
   * A name of compiled bundle
   */
  pluginName: string;

  /**
   * A comma-delimited list of shared lib names used by current plugin
   */
  sharedLibs: string;
}

let entryPointPath: any;

/**
 * Custom build trigger
 *
 * @param {Options} options
 * @param {BuilderContext} context
 * @param {{webpackConfiguration?: ExecutionTransformer<webpack.Configuration>}} [transforms={}]
 * @returns {Observable<BrowserBuilderOutput>}
 */
function buildPlugin(options: Options,
                     context: BuilderContext,
                     transforms: {
                         webpackConfiguration?: ExecutionTransformer<webpack.Configuration>,
                     } = {}): Observable<BrowserBuilderOutput> {
  
  options.deleteOutputPath = false;
  
  // Validate the options
  validateOptions(options);

  const originalWebpackConfigurationFn = transforms.webpackConfiguration;
  
  // Update the webpack configurations
  transforms.webpackConfiguration = (config: webpack.Configuration) => {
    patchWebpackConfig(config, options);
    return originalWebpackConfigurationFn ? originalWebpackConfigurationFn(config) : config;
  };

  const result = executeBrowserBuilder(options as any, context as any, transforms);

  return result.pipe(tap(() => {
    patchEntryPoint('');
  }));
}

/**
 * Function to write just in time build data to the main.ts
 * file before the bundling happens
 *
 * @param {string} contents
 */
function patchEntryPoint(contents: string) {
  fs.writeFileSync(entryPointPath, contents);
}

/**
 * Validate the build options
 *
 * @param {Options} options
 */
function validateOptions(options: Options) {
  const { pluginName, modulePath } = options;

  if (!modulePath) {
    throw Error('Please define modulePath!');
  }

  if (!pluginName) {
    throw Error('Please provide pluginName!');
  }
}

/**
 * Update the webpack build params so that we take in only
 * the necessary parameters to build the umd files
 *
 * @param {webpack.Configuration} config
 * @param {Options} options
 */
function patchWebpackConfig(config: webpack.Configuration, options: Options) {
  const { pluginName, sharedLibs } = options;

  // Make sure we are producing a single bundle
  delete config.entry.polyfills;
  delete config.entry['polyfills-es5'];
  delete config.optimization.runtimeChunk;
  delete config.optimization.splitChunks;
  delete config.entry.styles;

  config.externals = {
    rxjs: 'rxjs',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/router': 'ng.router',
    tslib: 'tslib'
    // put here other common dependencies
  };

  if (sharedLibs) {
    config.externals = [config.externals];
    const sharedLibsArr = sharedLibs.split(',');
    sharedLibsArr.forEach(sharedLibName => {
      const factoryRegexp = new RegExp(`${sharedLibName}.ngfactory$`);
      config.externals[0][sharedLibName] = sharedLibName; // define external for code
      config.externals.push((context, request, callback) => {
        if (factoryRegexp.test(request)) {
          return callback(null, sharedLibName); // define external for factory
        }
        callback();
      });
    });
  }

  const ngCompilerPluginInstance = config.plugins.find(
    (x: any) => x.constructor && x.constructor.name === 'AngularCompilerPlugin'
  );
  if (ngCompilerPluginInstance) {
    ngCompilerPluginInstance._entryModule = options.modulePath;
  }

  // preserve path to entry point
  // so that we can clear use it within `run` method to clear that file
  entryPointPath = config.entry.main[0];

  const [modulePath, moduleName] = options.modulePath.split('#');

  const factoryPath = `${modulePath.includes('.') ? modulePath : `${modulePath}/${modulePath}`}.ngfactory`;
  const entryPointContents = `
      export * from '${modulePath}';
      export * from '${factoryPath}';
      import { ${moduleName}NgFactory } from '${factoryPath}';
      export default ${moduleName}NgFactory;
  `;

  patchEntryPoint(entryPointContents);

  config.output.filename = `${pluginName}.js`;
  config.output.library = pluginName;
  config.output.libraryTarget = 'umd';
  // workaround to support bundle on nodejs
  config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
}

// Export the custom build script
export default createBuilder<Options>(buildPlugin);
