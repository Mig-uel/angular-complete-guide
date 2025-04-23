import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Task } from '../../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // custom event emitter for parent <Tasks /> to emit when user wants to close
  @Output() isBackdropOrCancelClicked = new EventEmitter<void>();

  // custom even emitter for parent <Tasks /> to emit when form was submitted
  @Output() add = new EventEmitter<Omit<Task, 'userId'>>();

  // old way two-way binding
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // signals for two-way binding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  // button click handler function passed to the button like react
  onBackdropOrCancelClicked() {
    this.isBackdropOrCancelClicked.emit();
  }

  // ngSubmit handler function
  onFormSubmit() {
    this.add.emit({
      dueDate: this.enteredDate,
      id: crypto.randomUUID(),
      summary: this.enteredSummary,
      title: this.enteredTitle,
    });
  }
}
