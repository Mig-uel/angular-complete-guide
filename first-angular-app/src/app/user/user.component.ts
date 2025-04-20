import { Component, Input } from '@angular/core';
import type { USERS } from './users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // signals approach
  // avatar = input.required<(typeof USERS)[number]['avatar']>();
  // name = input.required<(typeof USERS)[number]['name']>();
  // imagePath = computed(() => '/users/' + this.avatar());

  @Input({
    required: true,
  })
  avatar!: (typeof USERS)[number]['avatar'];
  @Input({
    required: true,
  })
  name!: (typeof USERS)[number]['name'];

  get imagePath() {
    return `/users/${this.avatar}`;
  }

  // this method is called when the user clicks the button
  onSelectUser() {}
}
