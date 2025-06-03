import { Component, signal, type OnDestroy, type OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, type Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit, OnDestroy {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  placesSubscription: Subscription | undefined = undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.isFetching.set(true);
    this.placesSubscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places', {
        // observe: 'response',
        // observe: 'events',
      })
      // transform data
      .pipe(map((res) => res.places))
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        complete: () => this.isFetching.set(false),
        error: (err) => this.error.set(err.statusText),
      });
  }

  ngOnDestroy(): void {
    this.placesSubscription?.unsubscribe();
  }
}
