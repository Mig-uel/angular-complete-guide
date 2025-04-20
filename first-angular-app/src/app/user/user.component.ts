import { Component } from '@angular/core';
import { USERS } from './users';

const randomIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = USERS[randomIndex];

  get imagePath() {
    return `/users/${this.selectedUser.avatar}`;
  }
}
