import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Expense } from '../../models/expenses.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addExpense(newExpense: Expense): Observable<Expense> {
    const postUrl = `${this.apiUrl}/createExpenses`; 
    return this.http.post<Expense>(postUrl, newExpense, {headers: { 'Content-Type': 'application/json' }})}

  getExpenses(): Observable<Expense[]> {
    const getUrl = `${this.apiUrl}/viewexpenses`;
    return this.http.get<Expense[]>(getUrl);
  }

}
