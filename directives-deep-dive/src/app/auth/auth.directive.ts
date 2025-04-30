import {
  Directive,
  effect,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import type { Permission } from './auth.model';
import { AuthService } from './auth.service';

/**
 * STRUCTURAL DIRECTIVE
 */
@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  // setup input
  userType = input.required<Permission>({
    alias: 'appAuth',
  });

  // inject AuthService
  // inject TemplateRef
  // inject ViewContainerRef
  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<HTMLParagraphElement>, // access to the content of the template
    private viewContainerRef: ViewContainerRef // a ref to the place where in the DOM where this directive is being used
  ) {
    /**
     * you need both TemplateRef and ViewContainerRef to tell
     * angular where to render what
     */
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        /**
         * createEmbeddedView method tells Angular to render
         * some new content into a certain place in the DOM
         *
         * it needs a TemplateRef as an argument
         */
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
