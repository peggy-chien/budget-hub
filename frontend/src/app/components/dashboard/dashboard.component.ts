import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalBalanceComponent } from "../total-balance/total-balance.component";
import { MonthlyIncomeComponent } from "../monthly-income/monthly-income.component";
import { MonthlyExpensesComponent } from "../monthly-expenses/monthly-expenses.component";
import { SavingsRateComponent } from "../savings-rate/savings-rate.component";
@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    TotalBalanceComponent,
    MonthlyIncomeComponent,
    MonthlyExpensesComponent,
    SavingsRateComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent {

}
