import { Injectable, NgModuleFactory } from '@angular/core';
import { TemplateConfigProvider } from './template-config-provider';
import { TemplateLoaderService } from './template-loader.service';
import { TEMPLATE_EXTERNALS_MAP } from './template-loder-map';

// System js holder
const SystemJs = window.System;

@Injectable()
export class ClientTemplateLoaderService extends TemplateLoaderService {
    constructor(private configProvider: TemplateConfigProvider) {
        super();
    }

    /**
     * Attach the support dependencies for the module that is loaded
     *
     * @memberof ClientTemplateLoaderService
     */
    provideSupportModules(): void {
        Object.keys(TEMPLATE_EXTERNALS_MAP).forEach(externalKey => {
            // Support provided by systemjs for AMD module loading
            window.define(externalKey, [], () => TEMPLATE_EXTERNALS_MAP[externalKey]);
        });
    }
    
    /**
     * Load the factory details for the module specified
     *
     * @template T
     * @param {string} templateName
     * @returns {Promise<NgModuleFactory<T>>}
     * @memberof ClientTemplateLoaderService
     */
    async load<T>(templateName: string): Promise<NgModuleFactory<T>> {
        const { config } = this.configProvider;
        if (!config[templateName]) {
            throw Error(`Cannot find template specified`);
        }

        // Get the shared dependencies for the module if specified
        const depsPromises = (config[templateName].deps || []).map(async (dep: any) => {
            return SystemJs.import(config[dep].path).then((m: any) => {
                window['define'](dep, [], () => m.default);
            });
        });

        // Get the factory object for the module itself
        return Promise.all(depsPromises).then(async () => {
            return SystemJs.import(config[templateName].path).then(
                (module: any) => module.default.default
            );
        });
    }
}