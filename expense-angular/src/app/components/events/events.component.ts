// src/app/events/events.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from '../../services/events-service/events.service';
import { EMPTY, Observable } from 'rxjs';
import { Event } from '../../models/event.model';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events$!: Observable<Event[]>;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
      this.events$ = this.eventsService.getEvents();
  }
}
