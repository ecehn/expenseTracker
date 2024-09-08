import { Component } from '@angular/core';
import { Expense } from '../../models/expenses.model';
import { CommonModule } from '@angular/common';
import { ExpensesService } from '../../services/expenses-service/expenses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  expenses$!: Observable<Expense[]>;

  constructor(private eventsService: ExpensesService) {}

  ngOnInit(): void {
      this.expenses$ = this.eventsService.getExpenses();
  }
}
