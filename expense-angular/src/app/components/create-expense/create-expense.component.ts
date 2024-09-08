import { Component } from '@angular/core';
import { Expense } from '../../models/expenses.model';
import { ExpensesService } from '../../services/expenses-service/expenses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-expense',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-expense.component.html',
  styleUrl: './create-expense.component.css'
})
export class CreateExpenseComponent {

  expense: Expense = {
    item: '',       
    notes: '',    
    date: new Date(),       
    amount: 0,    
    paidBy: []  
  };

  constructor(private expenseService: ExpensesService) {}

  onSubmit() {
    this.expenseService.addExpense(this.expense).subscribe({
      next: (response) => {
        console.log('Expense added successfully:', response);
      },
      error: (err) => {
        console.error('Error adding expense:', err);
      }
    });
  }

}
