import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [NewTaskComponent, TasksComponent, TaskComponent],

  exports: [TasksComponent],

  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
