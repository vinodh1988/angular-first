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

Any attribute directive changes behaviour of the target element

target element could be either any html element or angular component

Attribute directives are further catogorized into three kinds

1. Input Directive
2. Output Directive
3. Input Output Directive
    

#### Input directive

* Input directive receives information
* it is wrapped within []

```
 example:
    <h1 [ngClass]="temp"> </h1>

 if temp = "x"
  
  a css called x is applied to h1

  inbuilt input directives : ngClass, ngStyle,style

```

#### Output Directive

* Output directive is usally an event listener
* it invokes the function which is specified as the value
* it is enclosed with in  ()

```
  example:
    
    <button (click)="doThis()> Click this </button>

    inbuilt output directives : click,change,mouseover,keyup,keydown

```

#### Input output Directive
* it behaves both as input directive and output directive
* it is enclosed with [()]

```

  <input type="text" [(ngModel)]="name">

   if name has a value it ll be printed in the text box
   suppose if you type name it ll be stored to variable name

```

## Parent Child Communication

If parent is sending information to the child [Input]

**Steps to follow**

- In the child component, you need a variable to receive information
- The variable has to qualified with a decorator in @Input

If child is passing some information to parent (output) 

- output is always an eventemitter

**Steps to follow**

- In the child component, you need a variable which is of type EventEmitter
- That variable has to be decorated with @Output
- EventEmitter is available in angular
- EventEmitter sends data to the subscribers
- We code in a such a way that whenever an event occurs using event emitter we emit the data
- We make the parent component subscribe to it
