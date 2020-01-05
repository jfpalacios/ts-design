import { ParkingTicket } from '../ParkingTicket';
import { ParkingSpotType } from '../spots/ParkingSpotType';
import { VehicleType } from './VehicleType';

abstract class Vehicle {
  private license: string;
  private ticket: ParkingTicket;
  readonly type: VehicleType;

  constructor(type: VehicleType) {
    this.type = type;
  }

  assignTicket(ticket: ParkingTicket): void {
    this.ticket = ticket;
  }

  abstract canParkIn(spot: ParkingSpotType): boolean;
}

export { Vehicle, VehicleType };
