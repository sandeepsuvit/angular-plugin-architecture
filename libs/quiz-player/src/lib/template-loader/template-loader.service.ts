import { NgModuleFactory } from '@angular/core';

/**
 * Base template loader, Can be extended with multiple loader types
 * in future
 *
 * @export
 * @abstract
 * @class TemplateLoaderService
 */
export abstract class TemplateLoaderService {
    protected constructor() {
        this.provideSupportModules();
    }

    /**
     * Register all the support libraries for the module
     *
     * @abstract
     * @memberof TemplateLoaderService
     */
    abstract provideSupportModules(): void;

    /**
     * Load the module itself
     *
     * @abstract
     * @template T
     * @param {string} templateName
     * @returns {Promise<NgModuleFactory<T>>}
     * @memberof TemplateLoaderService
     */
    abstract load<T>(templateName: string): Promise<NgModuleFactory<T>>;
}
