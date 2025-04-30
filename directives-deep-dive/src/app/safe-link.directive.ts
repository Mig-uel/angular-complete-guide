import { Directive } from '@angular/core';

// custom attribute directive
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active');
  }
}
