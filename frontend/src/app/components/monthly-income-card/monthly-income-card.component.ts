import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';

@Component({
  selector: 'app-monthly-income-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './monthly-income-card.component.html',
  styleUrl: './monthly-income-card.component.scss'
})
export class MonthlyIncomeCardComponent {
  @Input() income: number = 0;
}
