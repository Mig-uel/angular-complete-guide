import { Component, computed, signal } from '@angular/core';
import { USERS } from './users';

let randomIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // signal to hold the selected user
  // signal is a reactive primitive that allows you to create a reactive state
  selectedUser = signal(USERS[randomIndex]);

  // computed property to get the image path for the selected user
  // computed is a reactive primitive that allows you to create a reactive property from another signal
  imagePath = computed(() => 'users/' + this.selectedUser().avatar);

  // get the image path for the selected user
  // get imagePath() {
  //   return `/users/${this.selectedUser.avatar}`;
  // }

  // this method is called when the user clicks the button
  onSelectUser() {
    randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser.set(USERS[randomIndex]);
  }
}
