import { inject, Injectable, signal } from '@angular/core';
import { LoggingService } from '../logging.service';
import type { Task, TaskStatus } from './task.model';

/**
 * Injectable tells Angular that this class can be injected
 * into other classes/components/directives/services
 *
 * In most cases, we will be using 'root' for providedIn,
 * meaning this service can be uses app-wide
 *
 * This service can also be provided in the `main.ts` file by
 * passing a second argument to bootstrapApplication.
 *
 * {
 *  providers: [TasksService]
 * }
 *
 * We can also provide this service by going to the component's
 * file and add TasksService under providers array
 *
 * @Component({
 *  providers: [TasksService]
 * })
 */
// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  addTasks(data: { title: string; description: string }) {
    const task: Task = {
      ...data,
      id: crypto.randomUUID(),
      status: 'OPEN',
    };

    this.tasks.update((prev) => [...prev, task]);
    this.loggingService.log('ADDED TASKS WITH TITLE ' + data.title);
  }

  updateTaskStatus(id: string, updatedStatus: TaskStatus) {
    const task = this.tasks().find((task) => task.id === id);

    if (!task) return;

    task.status = updatedStatus;

    this.loggingService.log('CHANGED TASK STATUS TO ' + updatedStatus);
  }
}
