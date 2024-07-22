import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'expense-angular';
}
