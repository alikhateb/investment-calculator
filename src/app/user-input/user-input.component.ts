import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../services/investment.service';
import type { InvestmentInput } from '../models/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal<number>(1000);
  annualInvestment = signal<number>(100);
  expectedReturn = signal<number>(10);
  duration = signal<number>(5);

  constructor(private investmentService: InvestmentService) {}

  calculate() {
    const data: InvestmentInput = {
      annualInvestment: this.annualInvestment(),
      duration: this.duration(),
      expectedReturn: this.expectedReturn(),
      initialInvestment: this.initialInvestment()
    };
    this.investmentService.calculateInvestmentResults(data);
  }
}
