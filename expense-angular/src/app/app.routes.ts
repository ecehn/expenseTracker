import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';

export const routes: Routes = [
  { path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'view', component: EventsComponent },
      { path: 'view2', component: ExpensesComponent },
      { path: 'create', component: CreateEventComponent},
      { path: 'create2', component: CreateExpenseComponent},
      { path: 'dashboard', component: DashboardComponent}, 
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for 404 handling
];
