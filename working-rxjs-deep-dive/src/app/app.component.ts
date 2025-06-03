import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { interval, map, type Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription | undefined = undefined;

  ngOnInit(): void {
    this.sub = interval(1000)
      .pipe(map((val) => val * 2))
      // we can add multiple pipe operator which alter
      // the emitted value
      .subscribe({
        next: (val) => console.log(val),
      });
    // if you only care about the next case, you could also
    // just pass a function to subscribe instead of an obj
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
