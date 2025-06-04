import { Component, signal, type OnDestroy, type OnInit } from '@angular/core';
import { type Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';

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
  userPlacesSubscription: Subscription | undefined = undefined;
  error = signal('');

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.isFetching.set(true);

    this.userPlacesSubscription = this.placesService
      .loadUserPlaces()
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
    this.userPlacesSubscription?.unsubscribe();
  }
}
