import {
  Component,
  ElementRef,
  inject,
  // HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,

  // key-value pairs as properties to your host component
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; // deprecated/not preferred
  // @HostListener('click') onClick() {
  //   console.log('Click');
  // } // deprecated/not preferred

  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('Click');
    console.log(this.el);
  }
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
