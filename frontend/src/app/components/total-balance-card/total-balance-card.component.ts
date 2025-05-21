import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';

@Component({
  selector: 'app-total-balance-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './total-balance-card.component.html',
  styleUrl: './total-balance-card.component.scss'
})
export class TotalBalanceCardComponent {
  @Input() balance: number = 0;
}
