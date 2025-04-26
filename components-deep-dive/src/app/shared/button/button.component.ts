import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}

/**
 * Component Host Elements
 *
 * Every Angular component has a Host Element
 *
 * Example:
 * A component with a selector of 'app-header' targets an
 * <app-header> element which is rendered into the real DOM
 *
 * Important: the elements targeted by your component selector
 * DO NOT act as placeholders and ARE NOT replaced when the page
 * is rendered!
 *
 * Instead, the selected elements are preserved and simply
 * 'enhanced'/taken over by your component logic and markup
 */
