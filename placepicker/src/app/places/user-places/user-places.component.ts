import { Component, signal, type OnDestroy, type OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError, type Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit, OnDestroy {
  isFetching = signal(false);
  places = signal<Place[] | undefined>(undefined);
  subscription: Subscription | undefined = undefined;
  error = signal('');

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.isFetching.set(true);

    this.subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
      .pipe(
        map((res) => res.places),
        catchError(() =>
          throwError(
            () =>
              new Error(
                'Something went wrong fetching your favorite places. Please try again later.'
              )
          )
        )
      )
      .subscribe({
        next: (places) => {
          this.places.set(places);
          this.isFetching.set(false);
        },
        error: (e) => {
          this.error.set(e);
          this.isFetching.set(false);
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
