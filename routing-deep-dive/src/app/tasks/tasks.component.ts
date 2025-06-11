import { Component, computed, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  uid = input.required<string>();
  order = input<'asc' | 'desc'>();

  constructor(private tasksService: TasksService) {}

  userTasks = computed(() =>
    this.tasksService.allTasks().filter((t) => t.userId === this.uid())
  );
}
