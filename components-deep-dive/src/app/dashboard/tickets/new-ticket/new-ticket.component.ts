import {
  Component,
  output,
  viewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';
  enteredText = '';

  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();

  onFormSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    this.enteredTitle = '';
    this.enteredText = '';
    // this.form().nativeElement.reset();
  }

  ngAfterViewInit(): void {
    // guaranteed access to elements that have been selected by
    // viewChild decorator, and that the template has been init
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }
}
