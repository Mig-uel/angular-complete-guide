import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// The bootstrapApplication function is used to bootstrap the Angular application. It takes the root component and the app configuration as arguments.
// The catch block is used to handle any errors that occur during the bootstrapping process. It logs the error to the console.
// The bootstrapApplication function is part of the Angular platform-browser package, which provides the necessary tools to bootstrap an Angular application in the browser.
// The appConfig object is imported from the app.config.ts file. It contains the configuration for the Angular application, such as the providers and imports.

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// bootstrapApplication(HeaderComponent); // This line is commented out because we are bootstrapping the AppComponent instead of the HeaderComponent.

/**
 * In Angular, the main.ts file is the entry point of the application. It is responsible for bootstrapping the root module or component of the application.
 *
 * You build a component tree. (One Angular application = one component tree)
 *
 *                         AppComponent
 *                /             \             \
 *           HeaderComponent  UserComponent TasksComponent
 *       /        \          /        \         \
 *                                            TaskComponent
 *
 */
