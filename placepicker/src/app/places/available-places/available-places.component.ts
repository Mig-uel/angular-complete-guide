import { Component, signal, type OnDestroy, type OnInit } from '@angular/core';
import { type Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';

// it is often a good idea to set up the subscription
// in the component so that you can clean it up there
// and simplifies state updates
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

  placesSubscription: Subscription | undefined;
  addPlaceSubscription: Subscription | undefined;

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.isFetching.set(true);

    this.placesSubscription = this.placesService
      .loadAvailablePlaces()
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        complete: () => this.isFetching.set(false),
        error: (err) => this.error.set(err),
      });
  }

  ngOnDestroy(): void {
    // unsubscribe from subscriptions for proper cleanup
    this.placesSubscription?.unsubscribe();
    this.addPlaceSubscription?.unsubscribe();
  }

  onSelectPlace(selectedPlace: Place) {
    this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
}
