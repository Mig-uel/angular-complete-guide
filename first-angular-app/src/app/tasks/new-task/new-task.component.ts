import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // custom event emitter for parent <Tasks />
  @Output() isBackdropOrCancelClicked = new EventEmitter<void>();

  // button click handler function passed to the button like react
  onBackdropOrCancelClicked() {
    this.isBackdropOrCancelClicked.emit();
  }
}
