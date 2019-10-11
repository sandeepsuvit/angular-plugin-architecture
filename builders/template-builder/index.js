"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const build_angular_1 = require("@angular-devkit/build-angular");
const fs = require("fs");
const operators_1 = require("rxjs/operators");
let entryPointPath;
/**
 * Custom build trigger
 *
 * @param {Options} options
 * @param {BuilderContext} context
 * @param {{webpackConfiguration?: ExecutionTransformer<webpack.Configuration>}} [transforms={}]
 * @returns {Observable<BrowserBuilderOutput>}
 */
function buildTemplate(options, context, transforms = {}) {
    options.deleteOutputPath = false;
    // Validate the options
    validateOptions(options);
    const originalWebpackConfigurationFn = transforms.webpackConfiguration;
    // Update the webpack configurations
    transforms.webpackConfiguration = (config) => {
        patchWebpackConfig(config, options);
        return originalWebpackConfigurationFn ? originalWebpackConfigurationFn(config) : config;
    };
    const result = build_angular_1.executeBrowserBuilder(options, context, transforms);
    return result.pipe(operators_1.tap(() => {
        patchEntryPoint('');
    }));
}
/**
 * Function to write just in time build data to the main.ts
 * file before the bundling happens
 *
 * @param {string} contents
 */
function patchEntryPoint(contents) {
    fs.writeFileSync(entryPointPath, contents);
}
/**
 * Validate the build options
 *
 * @param {Options} options
 */
function validateOptions(options) {
    const { templateName, modulePath } = options;
    if (!modulePath) {
        throw Error('Please define modulePath!');
    }
    if (!templateName) {
        throw Error('Please provide templateName!');
    }
}
/**
 * Update the webpack build params so that we take in only
 * the necessary parameters to build the umd files
 *
 * @param {webpack.Configuration} config
 * @param {Options} options
 */
function patchWebpackConfig(config, options) {
    const { templateName, sharedLibs } = options;
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
    const ngCompilerPluginInstance = config.plugins.find((x) => x.constructor && x.constructor.name === 'AngularCompilerPlugin');
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
    // Output webpack configuration
    config.output.filename = `${templateName}.umd.js`;
    config.output.library = templateName;
    config.output.libraryTarget = 'umd';
    // workaround to support bundle on nodejs
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
}
// Export the custom build script
exports.default = architect_1.createBuilder(buildTemplate);
