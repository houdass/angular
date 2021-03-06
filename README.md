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
- ng new my-dream-app --style=scss|sass|less (default: css)
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
- From Angular 6, add `@import "~bootstrap/dist/css/bootstrap.min.css"; to `styles.scss` file

# Component selectors

- selector: `'app-servers'` => `<app-servers></app-servers>`
- selector: `'.app-servers'` => `<div class="app-servers"></div>`
- selector: `'[app-servers]'` => `<div app-servers></div>`

# Databinding
- String interpolation `{{ data }}`
- Property binding `[property]="data"` or `bind-property="data"` for example `<button [disabled]="isDisabled"> ...`
- Event Binding `(event)="callback()"` or `on-event="callback()"`
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
  `<ng-template #noCondition><p>My message if false<p></ng-template>`
- Or, for more consistency
- `<p *ngIf="isVisible; then condition else noCondition"></p>`
  `<ng-template #condition><p>My message if true<p></ng-template>`
  `<ng-template #noCondition><p>My message if false<p></ng-template>`
  
# *ngFor (Getting the index)
- `<p *ngFor="let item of items; let i = index">{{i}} - {{item.name}}</p>`
- Or, `<p *ngFor="let item of items; index as i">{{i}} - {{item.name}}</p>`

# Encapsulation
- **encapsulation: ViewEncapsulation.Emulated** => Emulate native scoping of styles by adding an attribute containing surrogate id to the host element and pre-processing the style rules provided via styles or styleUrls, and adding the new host element attribute to all selectors, this is the default option.
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
 * @Inject() is a manual mechanism for letting Angular know that a parameter must be injected. It can be used like so:
 `constructor(@Inject(ChatWidget) private chatWidget) {}`
 * The usage of providers would duplicate the provider instances, the duplication of providers would cause issues as they would shadow the root instances, which are probably meant to be singletons, only the root AppModule should import your module, if another module or component imports it too, the app can generate multiple instances of a service.
 * As a general rule, import modules with providers exactly once, preferably in the application's root module, that's also usually the best place to configure, wrap, and override them.
 * Using Services for Cross-Component Communication
   * Service : `statusUpdated = new EventEmitter<string>();`
   * Component 1 : `this.accountsService.statusUpdated.emit(status);`
   * Component 2 : `this.accountsService.statusUpdated.subscribe((status: string) => console.log(status));`
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
    
# Routing
  * Setting up and Loading Routes
      * import { RouterModule, Routes } from '@angular/router'; 
      * <pre>const appRoutes: Routes = [
          {
            path: '',
            redirectTo: '/recipes',
            pathMatch: 'full'
          },
          {
            path: 'recipes',
            component: RecipesComponent
          },
          {
            path: 'shopping-list',
            component: ShoppingListComponent
          }
        ];
        @NgModule({
          imports: [RouterModule.forRoot(appRoutes)],
          exports: [RouterModule]
        })
        export class AppRoutingModule {}</pre>
  * Navigating with Router Links
      * `<a routerLink="recipes">Recipes</a>`
      * or, `<a [routerLink]="'recipes'">Recipes</a>`
  * Styling Active Router Links
      * `<li routerLinkActive="active"></li>`
  * Navigating Programmatically
      * constructor(private router: Router, private route: ActivatedRoute) {}
      * `this.router.navigate(['new'], { relativeTo: this.route });`
      
  * Fetching Route Parameters
      * constructor(private route: ActivatedRoute) {}
      * `const id = +this.route.snapshot.params['id'];`
  * Fetching Route Parameters Reactively
      * <pre>this.route.params.subscribe((params) => {
           this.id = +params['id'];
         });</pre>
         
  * Passing Query Parameters and Fragments
      * `<a [routerLink]="[server.id]"
              [queryParams]="{ allowEdit: server.id === 3 ? '1' : '0' }"
              fragment="loading"
              *ngFor="let server of servers">
              {{ server.name }}
            </a>`
            
      * `this.router.navigate(['servers', id, 'edit'], { queryParams: { allowEdit: false }, fragment: 'loading'});`
  * Retrieving Query Parameters and Fragments
      * <pre>this.route.queryParams.subscribe((queryParams) => {
              this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        });
        this.route.fragment.subscribe((fragment) => {
              console.log(fragment);
        });</pre>
            
  * Setting up Child (Nested) Routes  
      * <pre>{
          path: 'recipes',
          component: RecipesComponent,
          children: [
            {
              path: '',
              component: RecipeStartComponent
            },
            {
              path: 'new',
              component: RecipeEditComponent
            },
            {
              path: ':id',
              component: RecipeDetailComponent
            },
            {
              path: ':id/edit',
              component: RecipeEditComponent
            }
          ]
        }</pre>        
  * Configuring the Handling of Query Parameters & Fragments    
      * this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
      * this.router.navigate(['edit'], { relativeTo: this.route, preserveFragment: true });
      
  * Redirecting and Wildcard Routes
      * { path: 'not-found', component: PageNotFoundComponent },
        { path: '**', redirectTo: 'not-found' }
  * Protecting Routes with canActivate and canActivateChild
      * <pre>import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
             import { Observable } from 'rxjs/Observable';
             import {Injectable} from '@angular/core';
             import {AuthService} from './auth.service';
             
             @Injectable()
             export class AuthGuard implements CanActivate, CanActivateChild {
             
               constructor(private authService: AuthService,
                           private router: Router) {}
               canActivate(route: ActivatedRouteSnapshot,
                           state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                 return this.authService.isAuthenticated()
                   .then((authenticated: boolean) => {
                     if (authenticated) {
                       return true;
                     } else {
                       this.router.navigate(['/']);
                     }
                   });
               }
             
               canActivateChild(route: ActivatedRouteSnapshot,
                           state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                 return this.canActivate(route, state);
               }
             }</pre>
      * <pre> {
            path: 'servers',
            component: ServersComponent,
            // canActivate: [AuthGuard],
            canActivateChild: [AuthGuard],
            children: [
               {
                 path: ':id', component: ServerComponent, resolve: { server: ServerResolver }                  },
               {
                 path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]
               }
            ]
          } </pre>
  * Controlling Navigation with canDeactivate
      * <pre> import {Observable} from 'rxjs/Observable';
              import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';

              export interface CanComponentDeactivate {
                canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
              }

              export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
                canDeactivate(component: CanComponentDeactivate,
                             currentState: ActivatedRouteSnapshot,
                             currentRoute: RouterStateSnapshot,
                             nextRoute?: RouterStateSnapshot
                             ): Observable<boolean> | Promise<boolean> | boolean {
                  return component.canDeactivate();
                }
              }</pre>
      * export class EditServerComponent implements CanDeactivateGuard {}
      * <pre>canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
            if (!this.allowEdit) {
              return true;
            }
            if ((this.serverName !== this.server.name) || (this.serverStatus !== this.server.status) && !this.changesSaved) {
              return confirm('Do you want to discard the changes?');
            } else {
              return true;
            }
          }</pre>
  * Passing Static Data to a Route
      * { path: 'not-found', component: ErrorPageComponent, data: { errorMessage: 'THIS IS AN ERROR!'} }
      * `this.errorMessage = this.route.snapshot.data['errorMessage'];`
  * Resolving Dynamic Data with the resolve Guard
      * { path: ':id', component: ServerComponent, resolve: { server: ServerResolver }}
      * <pre>import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
             import {Server} from './server.model';
             import {Observable} from 'rxjs/Observable';
             import {ServersService} from './servers.service';
             import {Injectable} from '@angular/core';
             
             @Injectable()
             export class ServerResolver implements Resolve<Server> {
             
               constructor(private serversService: ServersService) {}
             
               resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
                 return this.serversService.getServer(+route.params['id']);
               }
             }
         </pre>
      * <pre>this.route.data.subscribe((data) => {
              this.server = data['server'];
            });</pre>
  * Understanding Location Strategies
      * <pre>@NgModule({
          imports: [
            RouterModule.forRoot(appRoutes, { useHash: false })
          ],
          exports: [RouterModule]
        })</pre>
           
# Observables
  * Interval
      * import {Observable} from 'rxjs/Observable';
      * import 'rxjs/add/observable/interval'; 
      * const myNumbers = Observable.interval(1000);
      * myNumbers.subscribe((number: number) => {
          console.log(number);
        });   
  * Observable.create
      * import {Observer} from 'rxjs/Observer';
      * <pre>const myObservable = Observable.create((observer: Observer<string>) => {
           setTimeout(() => {
             observer.next('After 1000');
           }, 1000);
           setTimeout(() => {
             observer.next('After 2000');
           }, 2000);
           setTimeout(() => {
             // observer.next('After 3000');
             // observer.error('There is a problem here !!!');
             observer.complete();
           }, 3000);
           setTimeout(() => {
             observer.next('After 4000');
           }, 4000);
        });</pre>     
      * <pre>this.myObservableSubscription = myObservable.subscribe(
            (data: string) => { console.log(data); },
            (error: string) => { console.log(error); },
            () => { console.log('completed'); }
        );</pre>
  * Unsubscribe
      * myNumbersSubscription: Subscription;
      * <pre>const myNumbers = Observable.interval(1000);
        this.myNumbersSubscription = myNumbers.subscribe((number: number) => {
           console.log(number);
        });</pre
      * <pre>ngOnDestroy() {
            this.myNumbersSubscription.unsubscribe();
        }</pre>
# Forms
   * Template-Driven (Angular infers the form object from the DOM)
      * Creating the Form and Registering the Controls
        * import { FormsModule } from '@angular/forms';
        * `imports: [FormsModule]`
        * `<input class="form-control" ngModel name="name">`
      * Submitting and Using the Form
        * `<form (submit)="onSubmit(f)" #f="ngForm">`
        * <pre>onSubmit(form: NgForm) {
          console.log(form);
          }</pre>
      * Accessing the Form with @ViewChild
        * @ViewChild('f') myform: NgForm;
        * <pre>onSubmit() {
             console.log(this.myform);
          }</pre>  
      * Adding Validation to check User Input
        * `<input type="email"
                 class="form-control"
                 ngModel
                 name="email"
                 required
                 email>`
      * Using the Form State
        * <pre>input.ng-invalid.ng-touched {
              border: 1px red solid;
          }</pre>
      * Outputting Validation Error Messages
        * `<input type="email"
                  class="form-control"
                  ngModel
                  name="email"
                  required
                  email
                  #email="ngModel">` 
        * `<span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email!</span>`
      * Set Default Values with ngModel Property Binding
        * `<input class="form-control"
                  ngModel="Default name"
                  name="name"
                  required>`
        * Or, `<select class="form-control"
                       [ngModel]="defaultQuestion"
                       name="question">
                 <option value="pet">Your first Pet?</option>
                 <option value="teacher">Your first teacher?</option>
               </select>`
        * defaultQuestion = 'teacher';
      * Using ngModel with Two-Way-Binding
        * `<textarea rows="3"
                     class="form-control"
                     name="answer"
                     [(ngModel)]="answer"></textarea>`
        * <p>Your replay: {{ answer }}</p>
      * Grouping Form Controls
        * `<div ngModelGroup="user"
               #user="ngModelGroup">
              <div class="form-group">
                <label for="name">Username</label>
                <input id="name"
                       class="form-control"
                       ngModel="Default name"
                       name="name"
                       required>
              </div>
              <div class="form-group">
                <label for="email">Mail</label>
                <input type="email"
                       id="email"
                       class="form-control"
                       ngModel
                       name="email"
                       required
                       email
                       #email="ngModel">
              </div>
              <span class="help-block" *ngIf="!user.valid && user.touched">User is invalid</span>
            </div>`
      * Handling Radio Buttons
        * genders = ['male', 'female'];
        * `<div class="radio" *ngFor="let gender of genders">
             <label>
               <input type="radio"
                      name="gender"
                      ngModel="male"
                      [value]="gender"> {{ gender }}
             </label>
           </div>` 
      * Setting and Patching Form Values
        * <pre>this.myform.setValue({
             user: {
               name: 'Angular',
               email: 'angular@google.com'
             },
             question: 'pet',
             answer: '',
             gender: 'female'
           }); </pre>
        * or, this.form.myform.setValue({});
        * <pre>this.myform.form.patchValue({
            user: {
              name: 'Houdass'
            }
          });</pre>
      * Resetting Forms
        * this.myform.reset();   
   * Reactive (Form is created programmatically and synchronized with the DOM)
      * Setup
          * import { ReactiveFormsModule } from '@angular/forms';
          * import { FormGroup } from '@angular/forms';
          * signupForm: FormGroup;
      * Creating a Form in Code
          * <pre>ngOnInit() {
               this.signupForm = new FormGroup({
                   name: new FormControl(null),
                   email: new FormControl(null),
                   gender: new FormControl('male')
               });
             }</pre>
      * Syncing HTML and Form
          * `<form [formGroup]="signupForm">`
          * `<input formControlName="name"
                    class="form-control">`
      * Submitting the Form
          * `<form [formGroup]="signupForm" (submit)="onSubmit()">`
          * <pre>onSubmit() {
               console.log(this.signupForm);
             }</pre>
      * Adding Validation
          * <pre> ngOnInit() {
               this.signupForm = new FormGroup({
                   name: new FormControl(null, Validators.required),
                   email: new FormControl(null, [Validators.required, Validators.email]),
                   gender: new FormControl('male')
               });
             }</pre>
      * Getting Access to Controls
          * `<span *ngIf="!signupForm.get('name').valid && signupForm.get('name').touched" class="help-block">Please enter a valid name!</span>`
          * `<span *ngIf="!signupForm.valid && signupForm.touched" class="help-block">Please enter valid data!</span>`
      * Grouping Controls
          * <pre>ngOnInit() {
               this.signupForm = new FormGroup({
                   user: new FormGroup({
                     name: new FormControl(null, Validators.required),
                     email: new FormControl(null, [Validators.required, Validators.email])
                   }),
                   gender: new FormControl('male')
               });
             }</pre>
          * `<div formGroupName="user">
                       <div class="form-group">
                         <label for="name">Name</label>
                         <input id="name"
                                formControlName="name"
                                class="form-control">
                         <span *ngIf="!signupForm.get('user.name').valid && signupForm.get('user.name').touched" class="help-block">Please enter a valid name!</span>
                       </div>
                       <div class="form-group">
                         <label for="email">Email</label>
                         <input id="email"
                                formControlName="email"
                                class="form-control">
                         <span *ngIf="!signupForm.get('user.email').valid && signupForm.get('user.email').touched" class="help-block">Please enter a valid email!</span>
                       </div>
                     </div>`
      * Arrays of Form Controls (FormArray)
          * `<div formArrayName="hobbies">
                       <h4>Your hobbies</h4>
                       <button class="btn btn-default"
                               type="button"
                               (click)="onAddHobby()">Add Hobby</button>
                       <div class="form-group"
                            *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index">
                         <input class="form-control" [formControlName]="i">
                       </div>
                     </div>`
          * <pre>this.signupForm = new FormGroup({
                 user: new FormGroup({
                   name: new FormControl(null, Validators.required),
                   email: new FormControl(null, [Validators.required, Validators.email])
                 }),
                 gender: new FormControl('male'),
                 hobbies: new FormArray([])
             });</pre>
          * <pre>onAddHobby() {
               const control = new FormControl(null, Validators.required);
               (<FormArray>this.signupForm.get('hobbies')).push(control);
             }</pre>
       * Creating Custom Validators
          * <pre>this.signupForm = new FormGroup({
                 user: new FormGroup({
                   name: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                   email: new FormControl(null, [Validators.required, Validators.email])
                 }),
                 gender: new FormControl('male'),
                 hobbies: new FormArray([])
             });</pre>
          * <pre>forbiddenNames(control: FormControl): { [s: string]: boolean } {
               if (this.forbiddenNamesList.indexOf(control.value) !== -1 ) {
                 return { 'nameIsForbidden': true };
               }
               return null;
             }</pre>
       * Using Error Codes
          * `<span *ngIf="!signupForm.get('user.name').valid && signupForm.get('user.name').touched"
                               class="help-block">
                           <span *ngIf="signupForm.get('user.name').errors.required">The name is required</span>
                           <span *ngIf="signupForm.get('user.name').errors.nameIsForbidden">This name is forbidden</span>
                         </span>`
       * Creating a Custom Async Validator
          * <pre>this.signupForm = new FormGroup({
                 user: new FormGroup({
                   name: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                   email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
                 }),
                 gender: new FormControl('male'),
                 hobbies: new FormArray([])
             });</pre>
          * <pre>forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
               return new Promise<any>((resolve, reject) => {
                 setTimeout(() => {
                   if (control.value === 'test@test.com') {
                     resolve({'emailIsForbidden': true});
                   } else {
                     resolve(null);
                   }
                 }, 1500);
               });
             }</pre>
          * `<span *ngIf="signupForm.get('user.email').pending" class="help-block">Loading .. please wait!</span>`
       * Reacting to Status or Value Changes
          * <pre>this.signupForm.statusChanges.subscribe((status) => {
               console.log(status);
             });</pre> 
          * this.signupForm.status // VALID/INVALID/PENDING  
          * <pre>this.signupForm.valueChanges.subscribe((status) => {
              console.log(status);
            });</pre>     
          * this.signupForm.value   
          
       * Resetting Forms
          * this.signupForm.reset({gender: 'female'});   
       * Setting and Patching Values  
          * <pre>this.signupForm.setValue({
                 user: {
                   name: 'Houdass Youness',
                   email: 'Youness@houdass.com'
                 },
                 gender: 'male',
                 hobbies: []
               });
               this.signupForm.setControl('hobbies', new FormArray([
                 new FormControl('Programming', Validators.required),
                 new FormControl('Hello World', Validators.required)
               ]));
            </pre>
          * <pre>this.signupForm.patchValue({
               user: {
                 name: 'Angular CLI'
               }
             });</pre>
# Pipes
  * Creating a Custom Pipe
    * <pre>import { Pipe, PipeTransform } from '@angular/core';
           
           @Pipe({
             name: 'shorten'
           })
           export class ShortenPipe implements PipeTransform {
             transform(value: any) {
               if (value.length > 10) {
                 return value.substr(0, 10) + '...';
               }
               return value;
             }
           }</pre>
    * `{{ text | shorten }}`
  * Parametrizing a Custom Pipe 
    * <pre>import { Pipe, PipeTransform } from '@angular/core';
           
           @Pipe({
             name: 'shorten'
           })
           export class ShortenPipe implements PipeTransform {
             transform(value: any, limit: number) {
               if (value.length > limit) {
                 return value.substr(0, limit) + '...';
               }
               return value;
             }
           }
      </pre>
    * `{{ text | shorten:5 }}`
  * Pure and Impure Pipes
  * Async Pipe
    * <pre>appStatus = new Promise((resolve) => {
               setTimeout(() => {
                 resolve('stable');
               }, 2000);
             })</pre>
    * `{{ appStatus | async }}`
