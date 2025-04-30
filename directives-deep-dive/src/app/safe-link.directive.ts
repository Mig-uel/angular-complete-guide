import { Directive, input, ElementRef } from '@angular/core';
import { LogDirective } from './log.directive';

/**
 * CUSTOM ATTRIBUTE DIRECTIVE
 */
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,

  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },

  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('', {
    alias: 'appSafeLink',
  });

  // inject and access the host element reference
  constructor(private hostElementRef: ElementRef<HTMLAnchorElement>) {}

  onConfirmLeavePage(e: MouseEvent) {
    const confirm = window.confirm('Do you want to leave the app?');

    if (confirm) {
      const address = this.hostElementRef.nativeElement.href;

      this.hostElementRef.nativeElement.href =
        address + `?from=${this.queryParam() || 'myapp'}`;

      return;
    }

    e.preventDefault();
  }
}
