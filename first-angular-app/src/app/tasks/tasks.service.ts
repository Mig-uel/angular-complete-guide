// a service is just another class

import { Injectable } from '@angular/core';
import type { Task } from '../task/task.model';

// the idea behind a service is that it performs some operations or
// manages some data that might be needed by one or more components

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) this.tasks = JSON.parse(tasks);
  }

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
    this.saveTasks();
  }

  /**
   * Remove tasks by ID
   * @param {string} id - ID of the task to be removed
   */
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  /**
   *  Save tasks to localStorage
   */
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
