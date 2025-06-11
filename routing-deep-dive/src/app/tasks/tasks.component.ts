import { Component, computed, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  uid = input.required<string>();

  constructor(private tasksService: TasksService) {}

  userTasks = computed(() =>
    this.tasksService.allTasks().filter((t) => t.userId === this.uid())
  );
}
