import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DashboardComponent } from './components/events/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'view', component: EventsComponent },
      { path: 'dashboard', component: DashboardComponent}, 
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for 404 handling
];
