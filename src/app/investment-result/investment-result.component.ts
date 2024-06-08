import { Component, computed, signal } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
import { CommonModule } from '@angular/common';
import type { InvestmentResult } from '../models/investment-result.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  annualData = this.investmentService.investmentResults.asReadonly();

  constructor(private investmentService: InvestmentService) {}
}
