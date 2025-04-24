import { Injectable, signal } from '@angular/core';
import type { AnnualData, InvestmentInput } from './investment-input.model';

// can generate a service using 'ng generate service <service-name>
@Injectable({
  providedIn: 'root', // singleton service auto-injected app-wide
})
export class InvestmentService {
  resultsData = signal<AnnualData[]>([]);

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualInvestment * year,
      });
    }

    this.resultsData.set(annualData);
  }
}

/**
 * providedIn
 *
 * this tells Angular where to register the service in its Dependency Injection
 * system.
 *
 * (how scoped or available that service should be)
 *
 * root: default and most common, registers the service app-wide (singleton)
 * once instance shared across the entire app
 *
 * platform: shares a single instance across multiple Angular applications
 * running on the same page, used in advanced scenarios like micro-frontend or
 * Angular elements
 *
 * any: creates a new instance of the service for each lazy-loaded module that
 * injects it, useful when you want separate instances of a service per module
 */
