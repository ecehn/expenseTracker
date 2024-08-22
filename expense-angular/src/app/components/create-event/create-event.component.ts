import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventsService } from '../../events.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  
  event: Event = {
    name: '',
  };

  constructor(private eventsService: EventsService) {}

  onSubmit() {
    this.eventsService.addEvent(this.event).subscribe({
      next: (response) => {
        console.log('Event added successfully:', response);
        // Optionally, reset the form or navigate away
      },
      error: (err) => {
        console.error('Error adding event:', err);
      }
    });
  }
}
