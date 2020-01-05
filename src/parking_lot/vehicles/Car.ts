import { Vehicle, VehicleType } from '.';
import { ParkingSpotType } from '../spots';

class Car extends Vehicle {
  constructor() {
    super(VehicleType.Car);
  }

  canParkIn(spot: ParkingSpotType): boolean {
    return spot == ParkingSpotType.Large || spot == ParkingSpotType.Compact;
  }
}

export { Car };