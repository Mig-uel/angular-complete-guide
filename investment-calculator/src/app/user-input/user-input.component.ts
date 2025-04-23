import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();

  initialInvestment = signal('');
  annualInvestment = signal('');
  expectedReturnRate = signal('5');
  duration = signal('10');

  handleFormSubmit() {
    this.calculate.emit({
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturnRate(),
      initialInvestment: +this.initialInvestment(),
    });
  }
}
