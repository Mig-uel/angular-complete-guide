import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from '../tasks/tasks.service';
import type { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
