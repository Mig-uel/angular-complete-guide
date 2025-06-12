import type { Routes } from '@angular/router';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';
import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,

    runGuardsAndResolvers: 'always', // always run guards and resolvers when params or query params change

    resolve: {
      userTasks: resolveUserTasks, // resolve the user tasks
    },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,

    canDeactivate: [canLeaveEditPage], // canDeactivate is used to prevent navigation if there are unsaved changes
  },
];
