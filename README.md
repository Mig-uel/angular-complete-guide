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
