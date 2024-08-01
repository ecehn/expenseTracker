// src/app/events/events.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    // no separate function needed for async pipe call
  }

  // ngOnInit(): void {
  //   this.eventsService.getEvents().subscribe(data => {
  //     this.events = data;
  //   });
  // }
}
