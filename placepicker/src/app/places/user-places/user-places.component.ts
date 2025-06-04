import { Component, signal, type OnDestroy, type OnInit } from '@angular/core';
import { type Subscription } from 'rxjs';
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
  places;
  isFetching = signal(false);
  userPlacesSubscription: Subscription | undefined = undefined;
  error = signal('');

  constructor(private placesService: PlacesService) {
    this.places = this.placesService.loadedUserPlaces;
  }

  ngOnInit(): void {
    this.isFetching.set(true);

    this.userPlacesSubscription = this.placesService
      .loadUserPlaces()
      .subscribe({
        error: (e) => {
          this.error.set(e);
          this.isFetching.set(false);
        },
        complete: () => this.isFetching.set(false),
      });
  }

  ngOnDestroy(): void {
    this.userPlacesSubscription?.unsubscribe();
  }
}
