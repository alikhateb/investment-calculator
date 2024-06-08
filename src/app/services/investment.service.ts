import { Injectable, signal } from '@angular/core';
import type { InvestmentInput } from '../models/investment-input.model';
import type { InvestmentResult } from '../models/investment-result.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  investmentResults = signal<InvestmentResult[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData: InvestmentResult[] = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest = investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment + data.annualInvestment * year
      });
    }

    this.investmentResults.set(annualData);
  }
}
