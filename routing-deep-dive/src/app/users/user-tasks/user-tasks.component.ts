import { Component, inject, input, type OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterOutlet,
  type ActivatedRouteSnapshot,
  type ResolveFn,
  type RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  uid = input.required<string>();

  // we can get a hold of the data passed to the route in the component
  // by injecting the ActivatedRoute service
  // and accessing the `data` property
  // or if passed withComponentInputBinding we can use the
  // `@Input` decorator or `input` function to bind the data directly
  message = input<string>(''); // optional input, default is empty string

  /**
   * we can get access to the resolved data
   * by injecting the ActivatedRoute service
   * and accessing the `data` property
   * the resolved data is available in the `data` property
   * of the ActivatedRoute service
   * we can also use the `@Input` decorator to bind the data
   * directly to the component input
   * or use the `input` function to bind the data directly
   * to the component input
   * this is useful for passing data to the component
   * without having to access the ActivatedRoute service
   * and accessing the `data` property
   */
  userName = input<string>(''); // optional input, default is empty string

  constructor(private activatedRoute: ActivatedRoute) {
    // we can also access the resolved data or data passed to the route
    // by injecting the ActivatedRoute service
    // and accessing the `data` property
  }

  ngOnInit() {
    // read the data passed to the route
    console.log(this.message());

    // read the resolved data and/or data passed to the route
    // don't forget to clean up the subscription
    console.log(
      this.activatedRoute.data.subscribe({
        next: (data) => console.log(data),
      })
    );
  }
}

/**
 * This is a resolver function that resolves the user's name
 * based on the user ID (uid) from the route parameters.
 * It is used to fetch the user's name before the route is activated.
 * The resolved data can be used in the component.
 */
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  // we can inject the UsersService to get the user data
  // and find the user by ID (uid) from the route parameters
  const usersService = inject(UsersService);

  const uid = activatedRoute.paramMap.get('uid');

  const userName = usersService.users.find((u) => u.id === uid)?.name;
  return userName || '';
};

/**
 * This is a resolver function that resolves dynamic title
 * based on the user ID (uid) from the route parameters.
 */
export const resolveTitle: ResolveFn<string> = (
  activateRoute: ActivatedRouteSnapshot,
  _: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const uid = activateRoute.paramMap.get('uid');

  return (
    usersService.users.find((u) => u.id === uid)?.name + ' Tasks' ||
    'User Tasks'
  );
};
