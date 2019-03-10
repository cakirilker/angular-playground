<!-- 
Data Binding in Angular

Interpolation: {{ pageTitle }}                       |  Dom <== Comp.
Property Binding: <img [src]='product.imageUrl'      |  Dom <== Comp.
Event Binding: <button (click)='toggleImage()' />    |  Dom ==> Comp
* Two-Way Binding: <input [(ngModel)]='listFilter' /> |  Dom <=> Comp.
* NgModel required FormsModule from @angular/forms.

Component Lifecycle Hooks
OnInit: Perform component initialization, retrive data from service.
OnChanges: Perform action after change to input properties.
OnDestroy: Perform cleanup.

Using a Component
As a directive
<body>
  <pm-root></pm-root>
</body>

As a Routing target
....

What Makes  a Component Nest-able?
Its template only manages a fragment of a larger view
It has a selector
It optionally communicates with its container 

Nested components get's data from it's container by @Input properties
Nested component pass data to it's container by raising events

Dependency Injection
- Root Injector
Service is available throughout the application
Recommended for most scenarios

@Injectable({
  providedIn: 'root'
})
export class MyService { }

Before Angular 6, use one above instead.
@NgModule({
  imports: [...],
  declarations: [...],
  bootstrap: [...],
  providers: [MyService]
})
export class AppModule { }

- Component Injector
Service is avaiable only to that component and its child components
Isolates a service used by only one component
Provided multiple instances of the service for each injected component or child components.

@Component({
  templateUrl: './my-component.html',
  providers: [MyService] <--- Here service injected to comp.
})
export class MyComponent { }

Observables and Reactive Extensions (RxJS)
Help manage async data
Treat events as a collection
  - An array whose items arrive asynchronously over time
Subscribe to receive notifications

Observable Operators
Methods on observables that compose new observables
Transforms the source observable in some way
Process each value as it is emitted
Ex: map, filter, take, merge, ...
https://rxmarbles.com

Composing Operators
Compose operators with pipe method
Promise vs Obserable
Provides single future value   |  Emits multiple values over time
Not lazy                       |  Lazy (subscribe)
Not cancellable                |  Cancellabe (unsubscribe)
                               |  Supports map, filter etc. operators

Subscribing to an Observable
Takes up to 3 arguments, each provided with handler func.
x.subscribe(nextFn, errorFn, completeFn)

netxtFn: Processes next emitted value, nextFn called for each value
errorFn: Called if there is an error
completeFn: Called on completion

.subscribe() method returns a subscription, we can use it to cancel subscription.
let sub = x.subscribe(nextFn);

Angular Modules
A class with an NgModule decorator
  - Organize the pieces of our app.
  - Arrange them into blocks
  - Extend our application with capabilities from external libraries
  - Provide a template resolution environment
  - Aggregate and re-export
A module can loaded eagerly when the app starts. Or it can be lazy loaded by the router.
A module 
  - Declares components,directives,pipes
  - Bootstraps app route component
  - Exports directives,components,pipes or other @angular modules
  - Imports other angular modules
  - Registers service providers 
Declarations Array:
  - Only declare components, directives and pipes. Don't add classes, services or modules to declarations array.
  - Never re-declare components, directives or pipes that belongs to other modules.
  - All declared components, directives and pipes are private by default. They are only accessible to other components, directives and pipes declared in the same module.
Exports Array:
  - Export any component, directive or pipe if other components need it.
  - Never export a service. Services added to providers array.
Imports Array:
  - Importing a module makes available any exported components, directives and pipes from that module.
  - Imports are not inherited.
Providers Array:
  - No longer recommended.
  - Recommended after Angular 6 use @Injectable decorator with providedIn: 'root' in service itself.
  - Don't add services to the providers array of a shared module. Services should be singleton in app. Instead consider building a CoreModule for services and importing it once in the AppModule.

- BrowserModule should only be imported in AppModule.
ng g m modules/product --flat -m app
--flat: Does not creates folder
-m app: imports created module in specified module

Angular CLI
# To create an app with custom prefix (can be found in angular.json file)
ng new hello-world --prefix hw
# Runs unit tests
ng test
# Runs protractor for end to end test
ng e2e

Before deploying app:
  - Minify/Uglify
  - Tree Shaking: Shakes code to remove dead branches. Basically removes unused code.
  - Precompile our templates. (AOT: Ahead of Time Compiler)
CLI does all above if we add --prod param to ng build
--> 