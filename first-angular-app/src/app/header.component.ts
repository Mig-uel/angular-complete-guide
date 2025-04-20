import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // The selector is used to identify the component in HTML
  // template: '<h1>Hello, World</h1>', // Inline template (not recommended for large templates)
  templateUrl: './header.component.html', // External template file
  standalone: true, // This component is standalone, meaning it can be used without being declared in a module
})
export class HeaderComponent {}
