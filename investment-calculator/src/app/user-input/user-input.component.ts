import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  initialInvestment = signal('');
  annualInvestment = signal('');
  expectedReturnRate = signal('5');
  duration = signal('10');

  handleFormSubmit() {
    if (!this.initialInvestment() || !this.annualInvestment()) return;

    this.calculate.emit({
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturnRate(),
      initialInvestment: +this.initialInvestment(),
    });

    this.initialInvestment.set('');
    this.annualInvestment.set('');
    this.expectedReturnRate.set('5');
    this.duration.set('10');
  }
}
