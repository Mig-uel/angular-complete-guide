import { Injectable, signal } from '@angular/core';
import type { Task } from './task.model';

/**
 * Injectable tells Angular that this class can be injected
 * into other classes/components/directives/services
 *
 * In most cases, we will be using 'root' for providedIn,
 * meaning this service can be uses app-wide
 */
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  constructor() {}

  addTasks(data: { title: string; description: string }) {
    const task: Task = {
      ...data,
      id: crypto.randomUUID(),
      status: 'OPEN',
    };

    this.tasks.update((prev) => [...prev, task]);
  }
}
