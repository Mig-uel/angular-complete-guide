import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // custom event emitter for parent <Tasks />
  @Output() isBackdropOrCancelClicked = new EventEmitter<void>();

  // old way two-way binding
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // button click handler function passed to the button like react
  onBackdropOrCancelClicked() {
    this.isBackdropOrCancelClicked.emit();
  }
}
