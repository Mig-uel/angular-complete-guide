import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  // declare and register all the components that need to work together (can also add directives)
  declarations: [AppComponent],

  // standalone components
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],

  // root component
  bootstrap: [AppComponent],
})
export class AppModule {}
