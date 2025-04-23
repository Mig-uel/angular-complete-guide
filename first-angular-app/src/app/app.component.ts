import { Component } from '@angular/core';
import { USERS } from './user/users';

@Component({
  standalone: false,
  selector: 'app-root', // this is the selector for the component, used in the HTML to render the component
  templateUrl: './app.component.html', // this is the template file for the component
  styleUrl: './app.component.css', // this is the CSS file for the component
})
export class AppComponent {
  users = USERS;
  selectedUserId?: string;

  // this is a getter that returns the selected user object based on the selectedId
  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId);
  }

  // this method is called when the user clicks on a user card
  // it sets the selectedId to the ID of the clicked user
  clickedUser(id: string) {
    this.selectedUserId = id;
  }
}
