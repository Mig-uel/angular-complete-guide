import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import type { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  standalone: true,
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      id: crypto.randomUUID(),
      request: ticketData.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }
}
