import {
  provideHttpClient,
  withInterceptors,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

function loggingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const req = request.clone({
    headers: request.headers.set('X-DEBUG', 'TESTING'),
  });
  console.log('[Outgoing Request]');
  console.log(request);

  // return next(req);
  return next(request);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // http interceptors
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
};
