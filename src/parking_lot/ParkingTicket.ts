enum ParkingTicketStatus {
  Active,
  Paid,
}

class ParkingTicket {
  readonly ticketNumber: string;
  private issuedAt: Date;
  private paidAt: Date;
  private paidAmount: number;
  readonly status: ParkingTicketStatus;

  constructor() {
    this.issuedAt = new Date();
    this.ticketNumber = this.generateTicketNumber();
  }

  private generateTicketNumber(): string {
    return Math.random()
      .toString(36)
      .substring(7);
  }
}

export { ParkingTicket, ParkingTicketStatus };
