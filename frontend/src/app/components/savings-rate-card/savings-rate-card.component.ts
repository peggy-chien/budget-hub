import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-savings-rate-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './savings-rate-card.component.html',
  styleUrl: './savings-rate-card.component.scss'
})
export class SavingsRateCardComponent {
  @Input() rate: number = 0;
}
