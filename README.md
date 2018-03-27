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

# Structure

- The basics
- Components & Databinding
- Directives
- Services & Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- Http
- Authentication
- Optimizations @ NgModules
- Deployment
- Animation & Testing

# Adding Bootstrap

- npm i -S bootstrap
- Open file .angular-cli.json
- Add ../node_modules/bootstrap/dist/css/bootstrap.min.css to `styles` node

# Component selectors

- selector: 'app-servers' =&gt; &lt;app-servers&gt;&lt;/app-servers&gt;
- selector: '.app-servers' =&gt; &lt;div class="app-servers"&gt;&lt;/div&gt;
- selector: '[app-servers]' =&gt; &lt;div app-servers&gt;&lt;/div&gt;

# Databinding
- String interpolation {{ data }}
- Property binding [property]="data" or bind-property="data for example &lt;button [disabled]="isDisabled"&gt; ...
- Event Binding (event)="callback()" or on-click="callback()"
- Two-way binding (banana in the box) [(data)]
- NOTE : 
    - &lt;p [innerText]="data"&gt;&lt;/p&gt; is equal to &lt;p&gt;{{ data }}&lt;/p&gt;
    - String interpolation =&gt; used to print/output some data
    - Property binding =&gt; Change some property

# *ngIf with an else condition
- &lt;p *ngIf="isVisible; else noCondition"&gt;My message if true&lt;/p&gt;
- &lt;ng-template #noCondition&gt;
    &lt;p&gt;My message if false&lt;p&gt;
  &lt;/ng-template&gt;
  
# *ngFor (Getting the index)
- &lt;p *ngFor="let item of items; let i = index"&gt;{{i}} - {{item.name}}&lt;/p&gt;
- Or, &lt;p *ngFor="let item of items; index as i"&gt;{{i}} - {{item.name}}&lt;/p&gt;
