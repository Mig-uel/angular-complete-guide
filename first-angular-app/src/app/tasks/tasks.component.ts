import { Component, Input, signal } from '@angular/core';
import type { Task } from '../task/task.model';
import { TasksService } from './tasks.service';

@Component({
  standalone: false,
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input()
  userId!: string;
  @Input()
  name!: string;
  isAddingTask = signal(false);

  // Dependency Injection
  // You 'tell' Angular which type of value you need
  // and Angular creates it and provides it as an argument
  constructor(private tasksService: TasksService) {}

  onAddTaskClicked() {
    this.isAddingTask.set(true);
  }

  // bind to <app-new-task /> @Output
  closeDialog() {
    this.isAddingTask.set(false);
  }

  // listen to the add event emitter and handle it
  onAdd(task: Omit<Task, 'userId'>) {
    this.tasksService.addTask(task, this.userId);

    this.closeDialog();
  }

  // get the selected user's tasks
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}
