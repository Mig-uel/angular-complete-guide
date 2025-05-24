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
