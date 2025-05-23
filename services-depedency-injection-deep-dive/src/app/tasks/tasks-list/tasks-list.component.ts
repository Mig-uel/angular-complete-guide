import { Component, computed, inject, signal } from '@angular/core';
import { TasksServiceToken } from '../../../main';
import {
  TASK_STATUS_OPTIONS,
  TaskStatusOptionsProvider,
} from './../task.model';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [TaskStatusOptionsProvider],
})
export class TasksListComponent {
  // Injection Token is the class of the service
  // private tasksService = inject(TasksService);
  private tasksService = inject(TasksServiceToken);
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  // injecting non-class value via constructor
  // constructor(
  //   @Inject(TASK_STATUS_OPTIONS) private taskStatusOptions: TaskStatusOptions
  // ) {}

  private selectedFilter = signal<string>('all');
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService.allTasks().filter((t) => t.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((t) => t.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter((t) => t.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
