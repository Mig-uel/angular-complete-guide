import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  id!: string;

  @Input({
    required: true,
  })
  avatar!: string;

  @Input({
    required: true,
  })
  name!: string;

  // custom event emitter to emit the selected user
  // this is a custom event emitter that emits an event when the user is selected
  @Output() select = new EventEmitter();

  get imagePath() {
    return `/users/${this.avatar}`;
  }

  // this method is called when the user clicks on the user card
  // it emits the select event with the user ID as the payload
  onSelectUser() {
    this.select.emit(this.id);
  }
}
