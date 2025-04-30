import { Directive } from '@angular/core';

// custom attribute directive
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,

  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirm = window.confirm('Do you want to leave the app?');

    if (confirm) return;

    event.preventDefault();
  }
}
