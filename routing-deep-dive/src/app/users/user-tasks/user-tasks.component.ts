import { Component, computed, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  uid = input.required<string>();

  constructor(private usersService: UsersService) {}

  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.uid())?.name
  );
}
