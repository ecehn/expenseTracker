import { Component } from '@angular/core';
import { EventsComponent } from '../../components/events/events.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [EventsComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent {

}
