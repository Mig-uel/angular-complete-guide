import { Component, inject, input } from '@angular/core';

import {
  RouterLink,
  type ActivatedRouteSnapshot,
  type ResolveFn,
  type RouterStateSnapshot,
} from '@angular/router';
import { TaskComponent } from './task/task.component';
import type { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  order = input<'asc' | 'desc'>('desc');
  userTasks = input<Task[]>([]);
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  const tasksService = inject(TasksService);
  const order = activatedRouteSnapshot.queryParamMap.get('order') || 'desc';

  const tasks = tasksService
    .allTasks()
    .filter((t) => t.userId === activatedRouteSnapshot.paramMap.get('uid'));

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else tasks.sort((a, b) => (a.id > b.id ? -1 : 1));

  return tasks.length ? tasks : ([] as Task[]);
};
