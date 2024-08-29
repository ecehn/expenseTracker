import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CreateEventComponent } from './components/create-event/create-event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventsComponent, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, CreateEventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'expense-angular';
}
