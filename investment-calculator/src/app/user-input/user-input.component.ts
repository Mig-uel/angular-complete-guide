import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

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
