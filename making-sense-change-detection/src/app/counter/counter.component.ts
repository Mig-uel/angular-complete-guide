import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  signal,
  type OnInit,
} from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  count = signal(0);

  private zone = inject(NgZone);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }

  ngOnInit(): void {
    setTimeout(() => this.count.set(0), 4000);

    setTimeout(() => {
      console.log('Timer expired!');
    }, 5000);
  }
}
