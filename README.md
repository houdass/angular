This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
You can also run `ng g c component-name`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

- https://angular.io/tutorial (Tour of Heroes)
- https://github.com/angular/angular-cli/wiki (CLI Documentation)
- https://blog.angular.io/ Angular blog

# What is Angular?

Angular is a Javascript framework which allows you to create reactive Single-page-applications (SPAs)

# What is Angular CLI?

- The CLI is a geart tool for big and very big Angular projects! It allows to focus on Angular code instead of workflow tasks.

# Project Setup:

- npm i -g @angular/cli
- ng new my-dream-app
- ng new my-dream-app --style=scss|sass
- cd my-dream-app
- ng serve
- https://www.sitepoint.com/ultimate-angular-cli-reference/

# Hot Module Replacement with angular/cli
https://medium.com/wizardnet972/hot-module-replacement-with-angular-cli-5fc7a3ae4a9c


# Structure

- The basics
- Components and Databinding
- Directives
- Services and Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- Http
- Authentication
- Optimizations and NgModules
- Deployment
- Animation and Testing

# Adding Bootstrap

- npm i -S bootstrap
- Open file .angular-cli.json
- Add ../node_modules/bootstrap/dist/css/bootstrap.min.css to `styles` node

# Component selectors

- selector: `'app-servers'` => `<app-servers></app-servers>`
- selector: `'.app-servers'` => `<div class="app-servers"></div>`
- selector: `'[app-servers]'` => `<div app-servers></div>`

# Databinding
- String interpolation {{ data }}
- Property binding `[property]="data"` or `bind-property="data"` for example `<button [disabled]="isDisabled"> ...`
- Event Binding `(event)="callback()"` or `on-click="callback()"`
- Two-way binding (banana in the box) `[(data)]`
- NOTE : 
    - `<p [innerText]="data"></p>` is equal to `<p>{{ data }}</p>`
    - String interpolation => used to print/output some data
    - Property binding => Change some property
    - `<input name="username" [(ngModel)]="user.username">` is equal to `
  <input name="username" [ngModel]="user.username" (ngModelChange)="user.username = $event
  ">`

# *ngIf with an else condition
- `<p *ngIf="isVisible; else noCondition">My message if true</p>`
- `<ng-template #noCondition><p>My message if false<p></ng-template>`
  
# *ngFor (Getting the index)
- `<p *ngFor="let item of items; let i = index">{{i}} - {{item.name}}</p>`
- Or, `<p *ngFor="let item of items; index as i">{{i}} - {{item.name}}</p>`

# Encapsulation
- **encapsulation: ViewEncapsulation.Emulated** => Emulate Native scoping of styles by adding an attribute containing surrogate id to the Host Element and pre-processing the style rules provided via styles or styleUrls, and adding the new Host Element attribute to all selectors, This is the default option.
- **encapsulation: ViewEncapsulation.Native** => Use the native encapsulation mechanism of the renderer.
- **encapsulation: ViewEncapsulation.None** => Don't provide any template or style encapsulation.

# Template reference variables
- @ViewChild
    * `<p #text>Hello World</p>` or `<p ref-text>Hello World</p>`
    * `@ViewChild('text') text: ElementRef;` 
    * `ngAfterViewInit() {
         console.log(this.text.nativeElement.textContent);
       }`
