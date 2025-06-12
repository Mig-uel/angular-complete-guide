import { inject } from '@angular/core';
import {
  RedirectCommand,
  Router,
  type CanMatchFn,
  type Routes,
} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/user.routes';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  // we can inject any service here
  // and any logic can be implemented
  // and return true or false or an observable that emits a boolean value

  const router = inject(Router);

  const shouldGetAccess = Math.random(); // dummy logic for demonstration

  if (shouldGetAccess < 0.5) {
    return true;
  }

  return new RedirectCommand(router.parseUrl('/')); // redirect to home if access is denied
};

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
    title: 'Home', // set the title of the page
  },
  {
    path: 'users/:uid', // <your-domain>/users/<uid>
    component: UserTasksComponent,

    children: userRoutes,

    /**
     * Route guards are functions that can be used to
     * control access to routes based on certain conditions
     * such as user authentication, authorization, etc.
     * they can be used to prevent access to certain routes
     * or to redirect users to other routes based on certain conditions.
     * they are defined as functions that return a boolean value
     * or an observable that emits a boolean value.
     */

    // canMatch: [dummyCanMatch], // the most versatile guard that can be used to control access to the route

    canActivate: [], // guard that can be used to control access to the route after it has been matched but before the component is loaded

    canActivateChild: [], // guard that can be used to control access to child routes of the route

    // we can also define a data property on the route
    // this data can be used in the component
    // you can set any arbitrary data here
    // this data is available in the ActivatedRoute
    // and can be accessed in the component using the `data` property
    // of the ActivatedRoute
    data: {
      message: 'Hello from the users route!',
    },

    // we can also pass dynamic data to the component
    // by using the resolve property which allows us to
    // resolve data before the route is activated
    // this is useful for fetching data from a server
    // and passing it to the component
    resolve: { userName: resolveUserName },

    // we can also pass a resolver to the title property for dynamic titles
    title: resolveTitle,
  },
  {
    path: '**', // catch-all route
    component: NotFoundComponent, // fallback component
  },
];
