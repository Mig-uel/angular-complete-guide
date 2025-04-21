import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { USERS } from './user/users';

@Component({
  selector: 'app-root', // this is the selector for the component, used in the HTML to render the component
  templateUrl: './app.component.html', // this is the template file for the component
  styleUrl: './app.component.css', // this is the CSS file for the component
  imports: [HeaderComponent, UserComponent, TasksComponent], // this is the list of components to import into the module
})
export class AppComponent {
  users = USERS;
  name!: string;

  clickedUser(id: string) {
    const user = this.users.find((u) => u.id === id);

    if (user) this.name = user.name;
  }
}
