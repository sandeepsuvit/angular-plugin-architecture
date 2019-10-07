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

    abstract provideSupportModules(): void;

    abstract load<T>(templateName: string): Promise<NgModuleFactory<T>>;
}
