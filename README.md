# Angular - The Complete Guide

## Why Would You Use Angular?

With "Just JavaScript", you would have to write imperative code! This means you would have to write step-by-step instructions that tells the browser what to do.

**Example**:

1. Find DOM elements and store them in variables.
2. Add event listeners to those elements.
3. In triggered function: find another element
4. Set CSS visibility of that element to 0
5. Create a new `p` DOM element
6. Set the text content of that element to "Hello World"
7. Find element into which the `p` should be inserted
8. Insert the `p` element into the DOM.

And so on...

With Angular, you can use declarative code! This means you can describe what you want to achieve and Angular will take care of the rest.

You define the target UI states and how they change and let Angular take care of the rest.

**Example**:

1. Manage `activeTab` state property
2. Depending on `activeTab`, show/hide different content
3. Change `activeTab` upon clicking on a tab

Angular also allows separation of concerns via components. You can create reusable components that encapsulate their own logic and styles.

#### Why Components?

Components are the building blocks of Angular applications. They allow you to create reusable UI elements that can be composed together to build complex UIs.

Modular Applications:

- Break up complex applications into simple building blocks
- Split up responsibilities and concerns
- Build a component once and re-use it as often as needed

Better Development Process:

- Assign different team members to different components
- Share components and logic across the team
- Reduce dependencies between components

#### Why a Framework?

Simplifies the process of building complex, interactive web user applications.

- Write declarative code
- Separation of concerns via components
- Object-oriented programming concepts and principles
- Use of TypeScript

## A Look Behind The Scenes Of Angular's Change Detection Mechanism

Angular uses a change detection mechanism to keep the UI in sync with the underlying data model. This mechanism is based on the concept of zones, which are used to track asynchronous operations and trigger change detection when necessary.

Angular's change detection mechanism uses `zone.js` to patch asynchronous operations and trigger change detection when they occur. `zone.js` notifies Angular about user events, HTTP requests, expired timers, etc. This allows Angular to automatically update the UI when the underlying data model changes.

When such events occur, it checks the Angular application for possible changes.

Deep dive about the change detection mechanism in later sections.

## Introducing Signals

In Angular, there are two approaches to managing state:

Option 1: Relying on `zone.js` and Angular's change detection mechanism. This is the traditional approach used in Angular applications.

- Works automatically, no special instructions required
- Pretty straightforward and easy to use and understand
- Supported since Angular 2

Option 2: Using Signals to notify Angular about value changes and required UI updates.

- Requires usage of special "signal" instructions and code
- Requires usage of `@angular/core/signals` package
- Supported since Angular 16

Signals are trackable data containers:

- A signal is an object that stores a value (any type of value, including nested objects)
- When you change the value of a signal, it notifies Angular about the change
- Angular manages subscriptions to the signal to get notified about changes
- Angular is then able to identify which components are using the signal and need to be updated

The advantage of using signals is that Angular can avoid checking the entire component tree for changes and zones concept. This can lead to better performance, especially in large applications with many components.

## When and How to Split Up Components?

It's up tp you to decide when and how to split up components. There are no strict rules, but here are some guidelines:

- Use components to encapsulate reusable UI elements and logic.
- Split up components when they become too large or complex.
- Create components for specific functionality or features.
- Use a consistent naming convention for components.
- Every component should have a single responsibility and should be focused on a specific task.

## Directives Deep Dive

**What are directives?**

Directives are classes that add additional behavior to elements in your Angular applications. They can be used to manipulate the DOM, add event listeners, and more.

There are three types of directives in Angular:

1. **Components**: Directives with a template. They are the most common type of directive and are used to create reusable UI elements.
2. **Structural Directives**: Directives that change the structure of the DOM. They can be used to add or remove elements from the DOM based on certain conditions.
3. **Attribute Directives**: Directives that change the appearance or behavior of an element. They can be used to add classes, styles, or event listeners to elements.
4. **Custom Directives**: You can create your own directives to encapsulate reusable behavior and logic.

Directives are _enhancements_ for elements (built-in ones or components). By enhanced, we mean extra behavior or settings can be added to the element.

**For example:**

We can use the `ngModel` directive to bind an input element to a property in our component. This allows us to automatically update the property when the user types in the input field.

We add it to the input to make Angular aware of that input element and use it for two-way data binding or other purposes.

The main takeaway is that `ngModel` is a directive not a component. It is there to under-the-hood enhance the input element and add extra behavior to it.

Directives change the configuration (properties, attributes, classes, styles, etc.) of the element they are attached to.

Unlike components, directives do not have their own view or template.

In other words, components are directives with a template. They are the most common type of directive and are used to create reusable UI elements.

Components are a directive because they enhance the element they are attached to with a template.

Again, directives have no template. They are just used to enhance the element they are attached to.

## Pipes - Deep Dive

**What are pipes?**

Pipes are a way to transform data in Angular templates. They can be used to format dates, currencies, numbers, and more.

Pipes transform the way data is displayed in the UI. In the end, in Angular, pipes are just functions that take an input value and return a transformed value.

They are a thing you can add in your template to transform the way data is displayed on the screen. Pipes transform values or how values are formatted and displayed when used in a template.

By default, Angular comes with a lot of built-in pipes. You can also create your own custom pipes to encapsulate reusable transformation logic.

Pipes are a great way to keep your templates clean and readable. They allow you to separate the transformation logic from the presentation logic.

## Services and Dependency Injection - Deep Dive

**Understanding services**

Services are classes that encapsulate reusable logic and functionality. They can be used to share data and functionality across different components in your Angular application.

- Services allow you to share logic and data across the application.
- Services are singletons by default. This means that there is only one instance of the service in the entire application.

You build centralized services that can be injected into multiple components, directives, and other services to share data and functionality.

## Angular Learned Checklist

### Components and Templates

- [x] Creating reusable components
- [x] Property binding (@Input, @Output, EventEmitter, etc.)
- [x] Extending built-in HTML elements with custom components via Attribute Selectors
- [x] Content projection (ng-content)
- [x] Content projection with multiple slots (ng-content select)
- [x] Content projection fallback
- [x] Multi-element content projection
- [x] View encapsulation (styles, shadow DOM, etc.)
- [x] Class and style binding
- [x] Component lifecycle hooks
- [x] Template reference variables
- [x] Getting access to template elements via ViewChild
- [x] Using the viewChild signal function
- [x] ViewChild vs ContentChild
- [x] Making sense of signal effects
- [x] Template binding (ngIf, ngFor, ngSwitch, etc.)
- [x] Using @empty for @for fallback
- [x] Updating signals using signal.update()
- [x] Setting up two-way data binding

### Directives

- [x] Understanding the difference between components and directives
- [x] Analyzing a built-in attribute directive (ngModel)
- [x] Analyzing a built-in structural directive (ngIf)
- [x] Creating a custom attribute directive
- [x] Using our custom attribute directive to change element behavior
- [x] Working with Inputs in our custom attribute directive
- [x] Directives and dependency injection
- [x] Creating a custom structural directive
- [x] Using our custom structural directive to change the DOM structure
- [x] Using the TemplateRef and ViewContainerRef classes
- [x] Using the ng-template element
- [x] Using syntactic sugar for ng-template
- [x] Host directives and composition
