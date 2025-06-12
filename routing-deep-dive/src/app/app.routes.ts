import type { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/user.routes';

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
  },
  {
    path: 'users/:uid', // <your-domain>/users/<uid>
    component: UserTasksComponent,

    children: userRoutes,

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
  },
  {
    path: '**', // catch-all route
    component: NotFoundComponent, // fallback component
  },
];
