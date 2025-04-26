import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  label = input.required<string>();
}

/**
 * The Shadow Dom
 *
 * A browser feature that allows you to attach hidden DOM structures to DOM
 * elements
 *
 * Example:
 * The built-in <video> element hides a more complex DOM tree that's
 * used internally
 *
 * For CSS styling, the Shadow DOM can be used to scope CSS styles to
 * that hidden tree - instead of applying styles globally to the
 * entire page
 *
 * Angular can emulate this Shadow DOM browser feature for its own
 * components
 */
