import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  standalone: false,
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('');
  annualInvestment = signal('');
  expectedReturnRate = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  handleFormSubmit() {
    if (!this.initialInvestment() || !this.annualInvestment()) return;

    this.investmentService.calculateInvestmentResults({
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
