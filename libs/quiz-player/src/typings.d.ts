/**
 * Typing support provided over window object after using systemjs library
 * 
 * For using additional support functionality from systemjs 
 * https://github.com/systemjs/systemjs
 *
 * @interface Window
 */
interface Window {
  // AMD (Asynchronous Module Definition) loading support (through Window.define)
  // https://github.com/systemjs/systemjs/blob/master/dist/extras/amd.js
  // Check global.define function
  define: (name: string, deps: string[], definitionFn: () => any) => void;

  // Enable support for System js in window object
  System: {
    import: (path) => Promise<any>;
  };
}
