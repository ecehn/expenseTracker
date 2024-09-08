import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Event } from '../../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    const getUrl = `${this.apiUrl}/api/events`;
    return this.http.get<Event[]>(getUrl);
  }

  addEvent(newEvent: Event): Observable<Event> {
    const postUrl = `${this.apiUrl}/create`; 
    return this.http.post<Event>(postUrl, newEvent, {headers: { 'Content-Type': 'application/json' }})}
}
