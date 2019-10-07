
/**
 * Interface for the template configuration
 *
 * @export
 * @interface ITemplateConfig
 */
export interface ITemplateConfig {
    [key: string]: {
        name: string;
        path: string;
        deps: string[];
    };
}