import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterLink, Router } from '@angular/router';
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
