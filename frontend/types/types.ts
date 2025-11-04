export type Ticket = {
  id: number;
  time: string;
  passengersName: string;
  passengerSSN: number;
  from: string;
  to: string;
  price: number;
};

export type TicketCreateDto = Omit<Ticket, 'id'>;
export type TicketUpdateDto = Omit<Ticket, 'id'>;