import { TasksServiceToken } from './../../../main';
import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  /**
   * Request TasksService service by passing the type
   * of the injector you want to use
   *
   * The type is IMPORTANT!
   *
   * The type serves as the so-called "Injection Token" which
   * is used by Angular to identify the "thing"
   * (e.g. the service) it should create and inject
   */
  // constructor(private tasksService: TasksService) {}
  constructor(@Inject(TasksServiceToken) private tasksService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.tasksService.addTasks({ title, description });

    this.formEl()?.nativeElement.reset();
  }
}
