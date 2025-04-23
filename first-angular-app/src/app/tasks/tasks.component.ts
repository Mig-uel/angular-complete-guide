import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import type { Task } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input()
  userId!: string;
  @Input()
  name!: string;

  isAddingTask = false;

  onClickCompleteFromTaskComponent(taskId: string) {}

  onAddTaskClicked() {
    this.isAddingTask = true;
  }

  // bind to <app-new-task /> @Output
  closeDialog() {
    this.isAddingTask = false;
  }

  // listen to the add event emitter and handle it
  onAdd(task: Omit<Task, 'userId'>) {
    this.tasks.unshift({
      ...task,
      userId: this.userId,
    });

    this.closeDialog();
  }
}
