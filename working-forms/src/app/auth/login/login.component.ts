import { Component } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    const { email, password } = formData.form.value;
  }
}
