import { Component, input, signal } from '@angular/core';
import type { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal<boolean>(false);

  onToggleDetails() {
    this.detailsVisible.update((prev) => !prev);
  }
}
