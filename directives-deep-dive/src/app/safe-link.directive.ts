import { Directive, input } from '@angular/core';

// custom attribute directive
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,

  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('', {
    alias: 'appSafeLink',
  });

  constructor() {
    console.log('SafeLinkDirective is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirm = window.confirm('Do you want to leave the app?');

    if (confirm) {
      const address = (event.target as HTMLAnchorElement).href;

      (event.target as HTMLAnchorElement).href =
        address + `?from=${this.queryParam() || 'myapp'}`;
      return;
    }

    event.preventDefault();
  }
}
