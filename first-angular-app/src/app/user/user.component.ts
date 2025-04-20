import { Component } from '@angular/core';
import { USERS } from './users';

let randomIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // this is a random user state from the USERS array
  selectedUser = USERS[randomIndex];

  // get the image path for the selected user
  get imagePath() {
    return `/users/${this.selectedUser.avatar}`;
  }

  // this method is called when the user clicks the button
  onSelectUser() {
    randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomIndex];
  }
}
