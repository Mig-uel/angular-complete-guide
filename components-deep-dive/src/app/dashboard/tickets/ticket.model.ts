type Status = 'open' | 'closed';

export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: Status;
}
