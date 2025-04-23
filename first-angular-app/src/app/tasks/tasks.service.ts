// a service is just another class

import { Injectable } from '@angular/core';
import type { Task } from '../task/task.model';

// the idea behind a service is that it performs some operations or
// manages some data that might be needed by one or more components

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  /**
   * Gets users tasks by userId
   * @param {string} userId - The userId of the user
   */
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  /**
   *
   * @param {Omit<Task, 'userId'>} task - A task
   * @param {string} userId - The userId of the user
   */
  addTask(task: Omit<Task, 'userId'>, userId: string) {
    this.tasks.unshift({
      ...task,
      userId,
    });
  }

  /**
   *
   * @param {string} id - ID of the task to be removed
   */
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
