import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
  { path: 'view', component: EventsComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' } // Optional: Redirect to /view by default
];
