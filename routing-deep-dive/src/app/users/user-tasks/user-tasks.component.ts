import { Component, computed, input, type OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  uid = input.required<string>();
  message = input<string>(''); // optional input, default is empty string

  constructor(private usersService: UsersService) {}

  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.uid())?.name
  );

  ngOnInit() {
    // read the data passed to the route
    console.log(this.message());
  }
}

// we can get a hold of the data passed to the route in the component
// by injecting the ActivatedRoute service
// and accessing the `data` property
// or if passed withComponentInputBinding we can use the
// `@Input` decorator or `input` function to bind the data directly
