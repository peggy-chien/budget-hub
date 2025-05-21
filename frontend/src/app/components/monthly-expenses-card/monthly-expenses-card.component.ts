import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';

@Component({
  selector: 'app-monthly-expenses-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './monthly-expenses-card.component.html',
  styleUrl: './monthly-expenses-card.component.scss'
})
export class MonthlyExpensesCardComponent {
  @Input() expenses: number = 0;
}
