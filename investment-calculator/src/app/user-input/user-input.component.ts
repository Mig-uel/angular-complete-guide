import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('');
  annualInvestment = signal('');
  expectedReturnRate = signal('5');
  duration = signal('10');

  handleFormSubmit() {}
}
