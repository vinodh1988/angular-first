# Firstapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Component creation using  ng

ng g c second

will create component

## Directives
   
Directives are custom attributes or custom elements created in angular framework

Directives are catogorized into three types 
    
    * Component Directives
    * Structural Directives
    * Attribute Directives

  
### Component Directives
 
    Every component itself is a directive

### Structural Directives
   
    * Structural Directive generates template, hides template or unhide template
    * Any Structural directive has to be prefixed with asterisk (*)

    ```
      inbuilt structural directives : ngFor, ngIf,ngSwitch

      example
      <div class="x" *ngIf="show"> content </div>

      the above will be visible if and only if show is true
    ```

###  Attribute Directives

   Attribute directives are further catogorized into three kinds

      1. Input Directive
      1. Output Directive
      1. Input Output Directive
    
