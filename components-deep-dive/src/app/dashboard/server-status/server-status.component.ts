import {
  Component,
  DestroyRef,
  inject,
  type AfterViewInit,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {}

  // Lifecycle hooks
  ngOnInit(): void {
    console.log('ON INIT');
    // Runs once after Angular has initiated all the component's inputs
    const interval = setInterval(() => {
      const rand = Math.random();

      if (rand < 0.5) this.currentStatus = 'online';
      else if (rand < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
