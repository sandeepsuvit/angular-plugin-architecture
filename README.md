# AdcWorkspace

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@adc-workspace/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## Create custom template builder

Run `npm run build:init` to compile the template builder

Run `npm run build:templates` to create umd file for all templates

Run `npm run build:template1` to create umd file for individual template

## References
- UMD (Universal Module Definition)
- AMD (Asynchronous Module Definition)
- https://itnext.io/how-to-build-a-plugin-extensible-application-architecture-in-angular5-736890278f3f
- https://stackoverflow.com/questions/45503497/how-to-load-dynamic-external-components-into-angular-application/45506470#45506470
- https://stackoverflow.com/questions/48590455/angular-5-load-modules-that-are-not-known-at-compile-time-dynamically-at-run
- https://stackoverflow.com/questions/41438198/implementing-a-plugin-architecture-plugin-system-pluggable-framework-in-angu
- https://stackoverflow.com/questions/50149016/load-new-modules-dynamically-in-run-time-with-angular-cli-angular-5
- https://github.com/paucls/angular-pluggable-architecture
- https://github.com/ionepaul/angular-plugin-architecture
- https://github.com/lmeijdam/angular-umd-dynamic-example