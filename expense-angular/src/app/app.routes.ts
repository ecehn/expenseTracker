import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

export const routes: Routes = [
  { path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'view', component: EventsComponent },
      { path: 'create', component: CreateEventComponent},
      { path: 'dashboard', component: DashboardComponent}, 
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for 404 handling
];
