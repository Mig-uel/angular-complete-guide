import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  // with the reactive approach we create the form group ourselves
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {}
}
