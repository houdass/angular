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
    - `<input name="name" [(ngModel)]="user.name">` is equal to `
  <input name="name" [ngModel]="user.name" (ngModelChange)="user.name = $event
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
* @ViewChild
    * .html file 
      * `<p #text>Hello World</p>` or `<p ref-text>Hello World</p>`
    * .ts file 
      * `@ViewChild('viewExample') text: ElementRef;` <br> 
      * `ngAfterViewInit() {
         console.log(this.viewExample.nativeElement.textContent);
       }`
       
* @ContentChild
     * .html file 
       * `<p #text>Hello World</p>` or `<p ref-text>Hello World</p>`
     * .ts file 
       * `@ContentChild('contentExample') text: ElementRef;` <br> 
       * `ngAfterContentInit() {
          console.log(this.contentExample.nativeElement.textContent);
        }`

# Hooks
  * ngOnChanges()	
      Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
      Called before ngOnInit() and whenever one or more data-bound input properties change.
    
  * ngOnInit()	
      Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
      Called once, after the first ngOnChanges().
      
  * ngDoCheck()	
      Detect and act upon changes that Angular can't or won't detect on its own.
      Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
      
  * ngAfterContentInit()	
      Respond after Angular projects external content into the component's view / the view that a directive is in.
      Called once after the first ngDoCheck().
      
  * ngAfterContentChecked()	
      Respond after Angular checks the content projected into the directive/component.
      Called after the ngAfterContentInit() and every subsequent ngDoCheck().
      
  * ngAfterViewInit()	
      Respond after Angular initializes the component's views and child views / the view that a directive is in.
      Called once after the first ngAfterContentChecked().
      
  * ngAfterViewChecked()	
      Respond after Angular checks the component's views and child views / the view that a directive is in.
      Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
      
  * ngOnDestroy()	
      Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
      Called just before Angular destroys the directive/component.
      
# Directives
  * @Directive({
      selector: '[appBasicHighlight]'
    })
  * ElementRef (`<p appBasicHighlight>App Basic Highlight Example</p>`)
    * constructor(private elementRef: ElementRef) {}
        
      ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
      }
  * Renderer (`<p appBetterHighlight>App Better Highlight Example</p>`)
    * constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    * ngOnInit() {
          this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
        }
  * @HostBinding
    * @HostBinding('style.backgroundColor') backgroundColor;
    * ngOnInit() {
        this.backgroundColor = 'blue';
      }    
  * @HostListener
    * @HostListener('mouseenter')
        mouseenter(eventData: Event) {
          this.backgroundColor = this.highlightColor;
        }
  * @Input
      * @Input() highlightColor = 'transparent';
      * `<p appBetterHighlight [highlightColor]="'blue'">App Better Highlight Example</p>`
      * or, `<p appBetterHighlight highlightColor="blue">App Better Highlight Example</p>`  
                 
# Services and Dependency Injection 
 * When @Inject() is not present, Injector will use the type annotation of the parameter.
 `constructor(@Inject('MyEngine') public engine: Engine) {}`
 * The usage of providers would duplicate the provider instances. The duplication of providers would cause issues as they would shadow the root instances, which are probably meant to be singletons, Only the root AppModule should import your module. If another module or component imports it too, the app can generate multiple instances of a service.
 * As a general rule, import modules with providers exactly once, preferably in the application's root module. That's also usually the best place to configure, wrap, and override them.
 * Using Services for Cross-Component Communication
   * Service : `statusUpdated = new EventEmitter<string>();`
   * Component 1 : `this.accountsService.statusUpdated.emit(status);`
   * Component 2 : `this.accountsService.statusUpdated
                          .subscribe((status: string) => console.log(status));`
 * @Injectable() lets Angular know that a class can be used with the dependency injector. 
 * @Injectable() is not strictly required if the class has other Angular decorators on it or does not have any dependencies.   
 * What is important is that any class that is going to be injected with Angular is decorated. However, best practice is to decorate injectables with @Injectable(), as it makes more sense to the reader.
 * ```typescript
    import { Injectable } from '@angular/core';
    import { AuthService } from './auth-service';
    import { AuthWidget } from './auth-widget';
    import { ChatSocket } from './chat-socket';
    
    @Injectable()
    export class ChatWidget {
      constructor(
        public authService: AuthService,
        public authWidget: AuthWidget,
        public chatSocket: ChatSocket) { }
    }
    ```            
            
