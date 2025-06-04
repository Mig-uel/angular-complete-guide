import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { Place } from './place.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  loadedUserPlaces = this.userPlaces.asReadonly();

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching the available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching your favorite places. Please try again later.'
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
    // tap operator is for performing side effects as a reaction to
    // incoming data without returning and without subscribing
  }

  addPlaceToUserPlaces(place: Place) {
    // optimistic updating
    const prevPlaces = this.userPlaces();

    // check for duplicates; locally
    if (!prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }

    // server will take care of duplicates backend
    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError((e) => {
          this.userPlaces.set(prevPlaces);

          this.errorService.showError('Failed to favorite selected place.');
          return throwError(
            () => new Error('Failed to favorite selected place.')
          );
        })
      );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((res) => res.places),
      catchError(() => throwError(() => new Error(errorMessage)))
    );
  }
}
