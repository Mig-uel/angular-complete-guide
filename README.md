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

**Dependency Injection**

Dependency Injection (DI) is a design pattern used in Angular to manage the dependencies of classes. It allows you to inject services into components, directives, and other services.

DI is a way to provide dependencies to a class without having to create them manually. This allows you to decouple your classes and make them more testable.

When you inject a service into a component, Angular creates an instance of the service and provides it to the component.

Angular has this built-in feature called "Dependency Injection" (DI). In the end it means that components, directives, and other services can request dependencies (services) from Angular.

- You don't create service instances yourself — instead, you request them from Angular.
- Angular's DI system is not limited to services but is the most common use case. You can also inject other components, directives, and even values.

Angular uses multiple injectors to manage the lifecycle of services. You can register your services at different levels in the application, such as the root injector or a specific component injector. This allows you to control the scope and lifecycle of your services.

When your components, directives, and other services request a dependency go through an injector tree to see if the dependency can be provided.

Again, we do not create service instances ourselves. We request them from Angular.

**Angular Has Multiple Injectors**

Angular has multiple injectors to manage the lifecycle of services. You can register your services at different levels in the application, such as the root injector or a specific component injector. This allows you to control the scope and lifecycle of your services.

Note: you must make Angular "aware" of the "things" (e.g. services) that should be injectable. That's why these "things" must be registered with one of its injectors.

These injectors are setup as a hierarchy.

### Platform EnvironmentInjector

The Platform Injector is the top-level injector in Angular. It is created when the Angular application is bootstrapped and is responsible for providing services that are shared across multiple applications running on the same platform/application.

Technically, there is a Null Injector at the top of the hierarchy, but it is not used in Angular applications other than throwing errors when a dependency cannot be resolved.

The idea of the Platform Injector is that it could provide values, service instances, etc. for multiple applications registered in the same Angular application (a more advanced use case).

For example, in `main.ts`, you could bootstrap multiple applications using the same platform injector.

### Application Root EnvironmentInjector and Module Injector

For most application, the Application Root Injector and potentially the Module Injector, if you are working with ngModules, and the Element Injector are the most relevant ones.

It's always the Element Injector to which a component reaches out first to request a dependency (e.g. a service instance).
If the Element Injector cannot provide the dependency, it will reach out to the Application Root Injector or the Module Injector.
And if the Application Root Injector or Module Injector cannot provide the dependency, it will reach out to the Platform Injector.
Finally, if the Platform Injector cannot provide the dependency, it moves up to the Null Injector and throws an error.

### Multiple Ways of Providing Services

There are multiple ways to provide services in Angular:

**Root Injector**: The most common way to provide services is to register them in the root injector. This makes the service available throughout the entire application.

```typescript
@Injectable({
  providedIn: 'root',
})
export class MyService {}
```

This is typically how you want to provide services. It makes them available throughout the entire application.

However, there are alternative ways to provide services.

**main.ts**:

Without the above added in, you can still provide the service to your entire application by going to the `main.ts` file and passing a second argument to the `bootstrapApplication` function.

```typescript
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { MyService } from './my.service'

bootstrapApplication(AppComponent, {
  providers: [MyService],
})
```

This is a more advanced use case and not the most common way to provide services.

Note: a provider is a class and piece of information that lets Angular know that a certain value should be injected into a component or service.

One important difference between the two approaches is that when you provide a service in the `main.ts` file, it is not tree-shakable. This means that if you don't use the service in your application, it will still be included in the final bundle.
When you provide a service in the `@Injectable` decorator, it is tree-shakable. This means that if you don't use the service in your application, it will be removed from the final bundle.

It is typically better to provide services in the `@Injectable` decorator. This makes them tree-shakable and allows Angular to optimize the final bundle size.

We will cover lazy loading and splitting in a later section.

**Element Injector**:

Besides providing a service using the `@Injectable` decorator or in the `main.ts` file, you can also provide a service with the Element Injector instead.

You can also provide services at the component level. This means that the service will only be available to that component and its child components.

The Element Injector is a special injector that is closely tied to your DOM elements, components, and directives. It is created when a component is instantiated and is responsible for providing services that are specific to that component.

We can provide a service in the `@Component` decorator:

```typescript
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [MyService], // <-- Provide the service here
})
export class MyComponent {
  constructor(private myService: MyService) {}
}
```

This means that the service will only be available to that component and its child components. This is a great way to provide services that are only needed by a specific component and its child components.

Other components in the application will not be able to access this service.

**Understanding the Behavior of Element Injector**

When you provide a service in the `@Component` decorator, Angular creates a new instance of the service for that component and its child components.
This means that if you inject the same service into multiple components including child components, each component will get its own instance of the service.

### Injecting Services into Services

You can also inject services into other services. This is a great way to share functionality and data between services.

If you are using the `@Injectable` decorator to provide a service, you can inject other services into it using the constructor or the 'inject()' function.

```typescript
import { Injectable } from '@angular/core'
import { LoggingService } from './my.service'

@Injectable({
  providedIn: 'root', // Specify the providerIn option
})
export class MyService {
  constructor(private loggingService: LoggingService) {}

  MyServiceMethod() {
    this.loggingService.log('MyService method called')
  }
}
```

You can also inject services for other services by directly going to the `main.ts` file and passing a second argument to the `bootstrapApplication` function.

### Using Custom Dependency Injection Tokens & Providers

You can also use custom dependency injection tokens to provide services. This is a great way to create reusable services that can be used in multiple applications.

Custom tokens are useful when you want to provide a service that is not tied to a specific class or when you want to provide a value instead of a class.

An injection token is a unique identifier that is used to register a service with an injector. It can be a string, a symbol, or a class.

Usually, when we provide a service, we pass the class name as the token. This is a shortcut that Angular provides for us.

We could however register our own custom token and use that to register a service.

```typescript
import { InjectionToken } from '@angular/core'

export const MY_CUSTOM_TOKEN = new InjectionToken<MyService>('MyCustomToken')
```

You can then use this token to provide a service to the bootstrap application.

```typescript
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { MY_CUSTOM_TOKEN } from './my-custom-token'
import { MyService } from './my.service'

bootstrapApplication(AppComponent, {
  providers: [{ provide: MY_CUSTOM_TOKEN, useClass: MyService }],
})
```

You would then use the token to inject the service into your component or service.

Typically, you would use the shortcut of passing the class name as the token and only in advanced use cases you would create your own custom token.

### Preparing a Non-Class Value for Injection

Aside from services, you can also provide non-service or non-class values to the injector. This is a great way to provide configuration values or constants that can be used throughout your application.

First, you need to create a token that will be used to identify the value. You can use the `InjectionToken` class to create a token.

```typescript
import { InjectionToken } from '@angular/core'
export const MY_CUSTOM_TOKEN = new InjectionToken<string>('MyCustomToken')
```

Then, you can provide this token in the `main.ts` file or in the `@Component` decorator. For this example, we will provide it in the `@Component` decorator. We also need to specify the type of the value we are providing.

```typescript
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [{ provide: MY_CUSTOM_TOKEN, useValue: 'Hello World' }],
})
export class MyComponent {
  constructor(@Inject(MY_CUSTOM_TOKEN) private myCustomValue: string) {
    console.log(this.myCustomValue) // Output: Hello World
  }
}
```

This will provide the value "Hello World" to the `MY_CUSTOM_TOKEN` token. You can then inject this value into your component or service using the `@Inject` decorator.

## Understanding Change Detection - Deep Dive

An important feature of Angular is its change detection mechanism. This mechanism is responsible for keeping the UI in sync with the underlying data model.

We will cover the following topics:

- What is change detection?
- How does change detection work?
- How to optimize change detection? (e.g. using OnPush strategy)
- How change detection changes when using signals?
- How its related to `zone.js`? And how we can avoid using `zone.js`?

Change detection happens automatically behind the scenes. You don't have to worry about it most of the time. However, it is important to understand how it works and how to optimize it for better performance.

### How Does Change Detection Work?

By default, you have your component tree and Angular wraps the entire application in a zone. This zone is responsible for tracking asynchronous operations and notifying Angular when they occur.

For example, when a user clicks a button or an HTTP request is made, the zone will notify Angular about the event. It here where the change detection mechanism kicks in and visits all components in the component tree to check if any of them need to be updated. It takes a look at all the templates and template bindings (i.e. all the uses of property bindings, event bindings, etc.) and checks whether that data has changed.
If it has, Angular will update the UI accordingly.

However, why does Angular check all components in the component tree? Why not just check the component that triggered the event? Why does it perform two checks?

### Change Detection During Development (ExpressionChangedAfterCheckedError)

Why do we have duplicated checks in development mode?

In development mode, Angular performs two checks to ensure that the application is working correctly. This is a safety measure to catch any potential issues with change detection.

The first check is a "dirty check" that checks if the component's state has changed. If it has, Angular will update the UI accordingly.

The second check is a "strict check" that checks if the component's state has changed in a way that could cause issues. If it has, Angular will throw an error and notify you about the issue.

This is a safety measure to catch any potential issues with change detection. It is not necessary in production mode, but it is a good practice to keep it in development mode.

### Writing Efficient Template Bindings

When writing template bindings, it is important to keep in mind that Angular will check all components in the component tree for changes. This means that if you have a lot of components and a lot of bindings, it can lead to performance issues.

To avoid this, you should try to keep your template bindings as simple as possible. Avoid using complex expressions or functions in your template bindings. Instead, use simple property bindings and event bindings.

For example, instead of using a complex expression in your template binding, you can use a simple property binding and update the property in your component.

Avoid calling functions in your template bindings. Instead, use property bindings and event bindings to update the UI. And, if you are using getters, make sure you perform basic efficient calculations in the getter and avoid complex calculations.

Event bindings and signal reads are an exception to this rule.

This is also why the `pipe` transformation values is cached by default. It is a performance optimization to avoid re-evaluating the pipe every time change detection runs.

### Avoid Zone Pollution

Zone pollution is a performance issue that occurs when the zone is notified about too many events. This can lead to performance issues and slow down the application.

You can tell Angular to ignore certain events for change detection. Angular provides a way to opt out of change detection for certain events.

To use this feature, you have to inject the `NgZone` service into your component and use the `runOutsideAngular` method to run the code outside of the zone.

```typescript
import { Component, NgZone } from '@angular/core'
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponent {
  constructor(private ngZone: NgZone) {}

  myMethod() {
    this.ngZone.runOutsideAngular(() => {
      // Code that should not trigger change detection
    })
  }
}
```

This will run the code outside of the zone and prevent change detection from being triggered. This is a great way to improve performance and avoid zone pollution.

### Using OnPush Strategy

The OnPush strategy is a change detection strategy that tells Angular to only check the component for changes when certain conditions are met. This can lead to better performance, especially in large applications with many components.

The OnPush strategy is an opt-in strategy that can be applied per component basis to make sure change detection potentially runs less often.

To use the OnPush strategy, you can set the `changeDetection` property in the `@Component` decorator to `ChangeDetectionStrategy.OnPush`.

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core'
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // <-- Use OnPush strategy
})
export class MyComponent {
  // Component logic
}
```

This tells Angular to use the OnPush change detection strategy for this component.

### Understanding the OnPush Strategy

The OnPush strategy tells Angular that the component that uses it will only ever change because some event occurred inside of the components or inside a nested component, or because an input property of the component changed.

When using the OnPush strategy, Angular will only check the component for changes when:

1. An input property of the component changes.
2. An event is emitted from the component.
3. The component is manually marked for check using the `markForCheck` method.
4. The component is manually marked for check using the `detectChanges` method.
5. The component is manually marked for check using the `checkNoChanges` method.

This means that Angular will not check the component for changes when the component is rendered or when the component is updated. This can lead to better performance, especially in large applications with many components.

You can also manually trigger change detection by using the `ChangeDetectorRef` service. This service provides methods to manually mark the component for check or to detect changes.

### Working with OnPush and Signals

When using signals, the OnPush strategy is not necessary because signals automatically notify Angular about changes. Signals are designed to work with the change detection mechanism and will trigger change detection when the signal value changes.

### Going Zone-less

If you want to avoid using `zone.js` and the change detection mechanism, you can use signals to manage state and notify Angular about changes. This allows you to write more efficient code and avoid the overhead of change detection.

Signals are a new feature in Angular that allows you to manage state and notify Angular about changes without using `zone.js` and the change detection mechanism.

Signals are trackable data containers that notify Angular about changes when the value of the signal changes. This allows Angular to update the UI without using `zone.js` and the change detection mechanism.

Signals are a great way to write more efficient code and avoid the overhead of change detection. They allow you to manage state and notify Angular about changes without using `zone.js` and the change detection mechanism.

## Working with RxJS (Observables)

RxJS is a library for reactive programming using Observables. It allows you to work with asynchronous data streams and provides a powerful way to handle events, HTTP requests, and more.

- What are Observables?
- Creating and using Observables
- Observables Operators
- Observables vs Signals

### What are Observables?

Observables are a way to represent asynchronous data streams. They allow you to work with data that is emitted over time, such as user events, HTTP requests, and more.

Observables are a concept provided by the RxJS library. They are not specific to Angular, but Angular provides a way to work with Observables using the `HttpClient` service and other features.

In the end, an Observable is an object that produces and controls a stream of data.

**A Stream of Data**
RxJS Observables emit values over time - you can set up subscriptions to listen to these values and react to them.

## Observables vs Signals

Observables and Signals are both ways to manage state and notify Angular about changes, but they have different use cases and characteristics.

Observables is a pipeline of data emitted over time. They are great for handling asynchronous data streams, such as user events, HTTP requests, and more. Observables can be used to create complex data flows and transformations using operators.

Signals are trackable data containers and you can change the value in those containers which will notify any subscribers about the change. You can also look into the container and read it at any time.

With Signals, you can read the value without subscribing to it which is not possible with Observables.

Observables are great for managing events and streamed data, while Signals are great for managing application state.

## Sending HTTP Requests and Handling Responses

### How to Connect Angular Applications to a Backend?

Usually, you have the frontend application (Angular) and the backend (server-side application) communicating with each other over HTTP.

The frontend application sends HTTP requests to the backend application, which processes the request and sends back a response.

## Handling User Input and Working with Forms (Template Driven Forms and Reactive Forms)

Angular offers two main approaches for handling user input and working with forms:

1. **Template Driven Forms**: This approach is based on directives and is suitable for simple forms. It allows you to create forms using Angular directives in the template.
2. **Reactive Forms**: This approach is based on reactive programming and is suitable for complex forms. It allows you to create forms using Angular's `FormControl`, `FormGroup`, and `FormArray` classes in the component.

We will explore both approaches in detail, including:

- Managing inputs and values
- Validation

### Template Driven Forms vs Reactive Forms

As mentioned, Angular offers two main approaches for handling user input and working with forms: Template Driven Forms and Reactive Forms.

You don't need to use either of these two ways, but they are the most common approaches in Angular applications.

**Template Driven Forms**:

Template Driven Forms are based on directives and are suitable for simple forms. They allow you to create forms using Angular directives in the template.

- Setting up forms via component templates.
- They are easy to use and require minimal setup.
- Implementing more complex logic and forms can be tricky.

The idea is that you set up your forms with the help of component templates and you register input elements with Angular so that it is aware of them and can manage their values and validation.

**Reactive Forms**:

Reactive Forms are based on reactive programming and are suitable for complex forms. They allow you to create forms using Angular's `FormControl`, `FormGroup`, and `FormArray` classes in the component.

- Setting up forms via TS code.
- Setup requires more verbose code, but it is more powerful and flexible.
- They provide more control over the form state and validation.
- They are more suitable for complex forms and dynamic form controls.

With Reactive Forms, you set up your forms structure in your TypeScript code and you link that to the template elements. This way Angular knows which elements are linked to which form controls and how to manage their values and validation.

## Routing and Building Multi-Page and Single-Page Applications

Angular provides a powerful routing system that allows you to build multi-page and single-page applications. The routing system allows you to define routes, navigate between different views, and manage the application state.

- What is routing? And why would you use it?
- Setting up routes in Angular
- Route configuration and navigation
- Nested routes and lazy loading
- Resolving data and controlling access

### What is Routing? And Why Would You Use It?

Angular application are typically single-page applications (SPAs) that load a single HTML page and dynamically update the content based on user interactions.

In simpler terms, there is only a single HTML page that is loaded when the application starts. The content of that page is then dynamically updated based on user interactions, such as clicking on links or buttons.

Routing simply means updating the UI as the user navigates through the application. It allows you to define different views or pages in your application and navigate between them.

Angular has built-in support for routing, more specifically, client-side routing. This means that the routing is handled in the browser, without the need to reload the entire page.

Angular watches and manipulates the URL and renders different components for different URLs.

Important: this is all happening in the browser, there is no server-side routing involved. The server only serves the initial HTML page and the Angular application takes care of the routing.

Example:
/users -> UsersComponent
/shop -> ShopComponent

When the user navigates to `/users`, Angular will render the `UsersComponent` and when the user navigates to `/shop`, Angular will render the `ShopComponent`.

## Code Splitting and Deferrable Views

To deliver real great Angular applications, performance actually matters. When it comes to optimizing the performance, one of the building blocks is code splitting or lazy loading.

- What is lazy loading?
- Why is it important?
- Different ways to implement lazy loading in Angular
- Deferrable views and how to use them
- Lazily loaded routes and how to configure them

### What is Lazy Loading?

Lazy loading is a design pattern that postpones the loading of resources until they are actually needed. In the context of Angular applications, this means that certain modules or components are not loaded until the user navigates to a route that requires them. This can significantly improve the initial loading time of the application and reduce the amount of code that needs to be downloaded and parsed upfront.

In the end it means that you want to build your app such that certain pieces of your code are only loaded when they are actually needed.

- Only load and run code when it is actually needed
- You split it into multiple chunks that are loaded on demand

Advantage is that less code needs to be downloaded and parsed upfront, leading to faster initial load times and improved performance.

- Smaller initial bundle size, application is up and running quicker
- Leads to a faster startup time of the application
- Leads to a better user experience

### Deferrable Views

Lazy loading is just one way that Angular offers to optimize the performance of your application. Another way is to use deferrable views.

Deferrable views allow you to load components or modules only when they are actually needed, rather than loading them upfront. This can be useful for components that are not immediately visible to the user or that are only used in specific scenarios.

Lazy loading is a specific implementation of deferrable views, where entire modules are loaded on demand based on the user's navigation.

Lazy Loading vs. Deferrable Views:

- **Lazy Loading**: Loads entire modules on demand based on the user's navigation. It is a specific implementation of deferrable views.
- **Deferrable Views**: Allows loading components or modules only when they are actually needed, rather than loading them upfront.

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

### Pipes

- [x] Understanding the purpose of pipes
- [x] Using built-in pipes
- [x] Creating a custom pipe

### Services and Dependency Injection

- [x] Understanding the purpose of services
- [x] Creating a service
- [x] Using a service in a component
- [x] Using a service in another service
- [x] Analyzing DI with the Angular DevTools
- [x] Using custom dependency injection tokens and providers
- [x] Injecting non-class values
- [x] Using the inject() function

### Change Detection

- [x] Understanding the change detection mechanism
- [x] Change detection in development mode
- [x] Writing efficient template bindings
- [x] Avoiding zone pollution
- [x] Using the OnPush change detection strategy
- [x] Understanding the OnPush strategy
- [x] Working with OnPush and signals
- [x] Going zone-less with signals

### RxJS (Observables)

- [x] Understanding Observables
- [x] Creating and using Observables
- [x] Working with RxJS operators
- [x] Working with Signals
- [x] Observables vs Signals
- [x] Converting Signals to Observables
- [x] Converting Observables to Signals
- [x] Creating and Using Custom Observables From Scratch

### Sending HTTP Requests and Handling Responses

- [x] How to connect Angular applications to a backend
- [x] Getting started with the HttpClient module
- [x] Sending GET requests
- [x] Configuring the Http Requests
- [x] Transforming and Using the response data
- [x] Showing loading indicators
- [x] Handling HTTP errors
- [x] Sending data to a backend
- [x] Outsourcing HTTP requests to a service
- [x] Managing HTTP-loaded data via Service
- [x] Implementing optimistic updates
- [x] Solving potential optimistic update issues
- [x] Implementing Application-wide Error Management
- [x] Sending DELETE requests
- [x] Introducing HttpInterceptors
- [x] Using HttpInterceptors to add headers
- [x] Using HttpInterceptors to log requests
- [x] Introducing Http Response Interceptors

### Handling User Input and Working with Forms (Template Driven Forms and Reactive Forms)

- [x] Template Driven Forms vs Reactive Forms
- [x] Template Driven Forms - Registering Form Controls
- [x] Template Driven Forms - Getting Access to the Angular Managed Form
- [x] Template Driven Forms - Extracting User Input Values
- [x] Template Driven Forms - Validating Input with Form Validation Directives
- [x] Template Driven Forms - Using Form Validation Status to Provide User Feedback
- [x] Template Driven Forms - Adding Validation Styles
- [x] Template Driven Forms - Interacting with the Underlying Form Object in the Component
- [x] Template Driven Forms - Updating the Form Programmatically
- [x] Reactive Forms - Getting Started
- [x] Reactive Forms - Syncing Reactive Form Definitions with the Template
- [x] Reactive Forms - Handling Form Submission
- [x] Reactive Forms - Adding Validators to Reactive Forms
- [x] Reactive Forms - Building Custom Validators
- [x] Reactive Forms - Creating and Using Async Validators
- [x] Reactive Forms - Interacting with the Form Programmatically
- [x] Reactive Forms - Connecting and Registering Inputs for a Complex Form
- [x] Reactive Forms - Working with Nested Form Groups and Form Arrays
- [x] Reactive Forms - Creating Multi-Input Validators/Form Group Validators

### Routing and Building Multi-Page and Single-Page Applications

- [x] What is routing? And why would you use it?
- [x] Enabling routing and adding a basic route
- [x] Rendering routes in the template
- [x] Registering multiple routes
- [x] Adding links the right way
- [x] Styling active links
- [x] Setting up and navigating to dynamic routes
- [x] Extracting dynamic route parameters via inputs
- [x] Extracting dynamic route parameters via the ActivatedRoute service observable
- [x] Working with nested routes
- [x] Route links and relative links
- [x] Accessing the parent route data from inside a child route
- [x] Loading data based on route parameters in child routes
- [x] Link shortcuts and programmatic navigation
- [x] Adding a "Not Found" route
- [x] Redirecting routes
- [x] Splitting route definitions across multiple files
- [x] Activated Route vs Activated Route Snapshot
- [x] Setting query parameters
- [x] Extracting query parameters via Inputs
- [x] Extracting query parameters via the ActivatedRoute service observable
- [x] Using query parameters for data manipulation
- [x] Adding static data to routes
- [x] Resolving Route-related dynamic data
- [x] Accessing route data in components
- [x] Controlling route resolver execution
- [x] Setting and resolving titles
- [x] Introducing route guards
- [x] Making sense of the CanDeactivate Guard
- [x] Improving the CanDeactivate Guard
- [x] Reloading pages via the Angular Router and configuring programmatic navigation
