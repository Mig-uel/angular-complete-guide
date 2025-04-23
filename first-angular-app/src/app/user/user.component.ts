import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { User } from './user.model';

@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true })
  user!: User;
  @Input({ required: true })
  selected: boolean = false; // this is a boolean input that indicates if the user is selected

  // this is a custom event emitter that emits an event when the user is selected
  @Output()
  select = new EventEmitter<string>();

  get imagePath() {
    return `/users/${this.user.avatar}`;
  }

  // this method is called when the user clicks on the user card
  // it emits the select event with the user ID as the payload
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
