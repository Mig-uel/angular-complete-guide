import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { UserComponent } from './user/user.component';

@NgModule({
  // declare and register all the components that need to work together (can also add directives)
  declarations: [AppComponent, HeaderComponent, UserComponent],

  // standalone components
  imports: [BrowserModule, SharedModule, TasksModule],

  // root component
  bootstrap: [AppComponent],
})
export class AppModule {}
