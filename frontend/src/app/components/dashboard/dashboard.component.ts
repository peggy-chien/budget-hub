import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalBalanceCardComponent } from "../total-balance-card/total-balance-card.component";
import { MonthlyIncomeCardComponent } from "../monthly-income-card/monthly-income-card.component";
import { MonthlyExpensesCardComponent } from "../monthly-expenses-card/monthly-expenses-card.component";
import { SavingsRateCardComponent } from "../savings-rate-card/savings-rate-card.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    TotalBalanceCardComponent,
    MonthlyIncomeCardComponent,
    MonthlyExpensesCardComponent,
    SavingsRateCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent implements OnInit {
  totalBalance: number = 0;
  monthlyIncome: number = 0;
  monthlyExpenses: number = 0;
  savingsRate: number = 0;

  ngOnInit() {
    // TODO: Replace with actual API calls
    this.loadDashboardData();
  }

  private loadDashboardData() {
    // Mock data for now - will be replaced with actual API calls
    this.totalBalance = 25000;
    this.monthlyIncome = 5000;
    this.monthlyExpenses = 3500;
    this.savingsRate = ((this.monthlyIncome - this.monthlyExpenses) / this.monthlyIncome) * 100;
  }
}
