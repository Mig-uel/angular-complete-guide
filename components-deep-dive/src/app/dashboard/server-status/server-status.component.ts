import { Component, type OnDestroy, type OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  intervalId: ReturnType<typeof setInterval> | undefined = undefined;
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  // Lifecycle hooks
  ngOnInit(): void {
    // Runs once after Angular has initiated all the component's inputs
    this.intervalId = setInterval(() => {
      const rand = Math.random();

      if (rand < 0.5) this.currentStatus = 'online';
      else if (rand < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);
  }

  ngOnDestroy() {
    // runs once before the component is destroyed
    clearInterval(this.intervalId);
  }
}
