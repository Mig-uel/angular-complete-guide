import {
  Component,
  effect,
  signal,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { count, interval, map, type Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
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
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onClick() {
    this.clickCount.update((prev) => prev + 1);
  }
}
