import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  // declare and register all the components that need to work together (can also add directives)
  declarations: [AppComponent],

  // root component
  bootstrap: [AppComponent],
})
export class AppModule {}
