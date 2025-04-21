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

  // this is the selected user ID, default is 'u1'
  selectedId = 'u1';

  // this is a getter that returns the selected user object based on the selectedId
  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedId)!;
  }

  // this method is called when the user clicks on a user card
  // it sets the selectedId to the ID of the clicked user
  clickedUser(id: string) {
    this.selectedId = id;
  }
}
