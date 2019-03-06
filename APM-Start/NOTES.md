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
--> 