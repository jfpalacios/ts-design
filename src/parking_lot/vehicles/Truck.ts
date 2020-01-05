import { Vehicle, VehicleType } from '.';
import { ParkingSpotType } from '../spots';

class Truck extends Vehicle {
  constructor() {
    super(VehicleType.Truck);
  }

  canParkIn(spot: ParkingSpotType): boolean {
    return spot == ParkingSpotType.Large;
  }
}

export { Truck };
