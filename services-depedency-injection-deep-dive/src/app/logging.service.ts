import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(message: string) {
    const ts = new Date().toLocaleDateString(); // timestamp

    console.log(`[${ts}]: ${message}`);
  }
}
