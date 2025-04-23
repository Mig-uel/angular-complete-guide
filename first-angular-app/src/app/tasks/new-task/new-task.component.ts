import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  // custom event emitter for parent <Tasks /> to emit when user wants to close
  @Output()
  closeModal = new EventEmitter<void>();

  // signals for two-way binding
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  // button click handler function passed to the button like react
  onCloseModal() {
    this.closeModal.emit();
  }

  // ngSubmit handler function
  onFormSubmit() {
    this.tasksService.addTask(
      {
        dueDate: this.enteredDate(),
        id: crypto.randomUUID(),
        summary: this.enteredSummary(),
        title: this.enteredTitle(),
      },
      this.userId
    );
    this.closeModal.emit();
  }
}
