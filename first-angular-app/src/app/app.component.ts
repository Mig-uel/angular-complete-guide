import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root', // this is the selector for the component, used in the HTML to render the component
  templateUrl: './app.component.html', // this is the template file for the component
  styleUrl: './app.component.css', // this is the CSS file for the component
  imports: [HeaderComponent], // this is the list of components to import into the module
})
export class AppComponent {}
