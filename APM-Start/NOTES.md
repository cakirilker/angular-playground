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
--> 