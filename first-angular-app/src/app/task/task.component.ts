import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import type { Task } from './task.model';

@Component({
  standalone: false,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({
    required: true,
  })
  task!: Task;

  constructor(private tasksService: TasksService) {}

  handleClick() {
    this.tasksService.removeTask(this.task.id);
  }
}
