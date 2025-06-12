import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, RouterLink, type CanDeactivateFn } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  uid = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  constructor(private tasksService: TasksService, private router: Router) {}

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.uid()
    );

    this.router.navigate(['/users', this.uid(), 'tasks'], { replaceUrl: true });
  }
}

/**
 * canDeactivate is a guard that can be used to prevent navigation
 * CanDeactivateFn is a function that returns a boolean value or an observable that emits a boolean value, it is also a generic type that takes a component type as a parameter
 */
export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (
  component
) => {
  if (
    component.enteredTitle() ||
    component.enteredSummary() ||
    component.enteredDate()
  ) {
    return confirm(
      'You have unsaved changes. Do you really want to leave this page?'
    );
  }

  return true; // allow navigation if there are no unsaved changes
};
