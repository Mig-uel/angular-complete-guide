import {
  Component,
  effect,
  signal,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { count, interval, map, Observable, type Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {
    initialValue: 0,
  });
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const intervalId = setInterval(() => {
      // subscriber.error() // emit error
      if (timesExecuted > 3) {
        clearInterval(intervalId);
        subscriber.complete();
        return;
      }

      console.log('Emitting new value...');
      subscriber.next({ message: 'New value' });
      timesExecuted++;
    }, 2000);
  });
  private sub: Subscription | undefined = undefined;

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times`);
    // });
  }

  ngOnInit(): void {
    // this.sub = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   // we can add multiple pipe operator which alter
    //   // the emitted value
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });
    // if you only care about the next case, you could also
    // just pass a function to subscribe instead of an obj
    this.sub = this.clickCount$.subscribe((val) => console.log(val));
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Custom interval observable completed'),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onClick() {
    this.clickCount.update((prev) => prev + 1);
  }
}
