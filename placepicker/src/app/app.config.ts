import {
  HttpEventType,
  provideHttpClient,
  withInterceptors,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { tap } from 'rxjs';

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
  return next(request).pipe(
    tap({
      next: (e) => {
        if (e.type === HttpEventType.Response) {
          console.log('[Incoming Response]');
          console.log(e.status);
          console.log(e.body);
        }
      },
    })
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // http interceptors
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
};
