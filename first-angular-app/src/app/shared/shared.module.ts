import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],

  // make components available to other modules
  exports: [CardComponent],
})
export class SharedModule {}
