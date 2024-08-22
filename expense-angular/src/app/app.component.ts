import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventsComponent } from './components/events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventsComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'expense-angular';
}
