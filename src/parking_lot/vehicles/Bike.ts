import { Vehicle, VehicleType } from '.';
import { ParkingSpotType } from '../spots';

class Bike extends Vehicle {
  constructor() {
    super(VehicleType.Bike);
  }

  canParkIn(spot: ParkingSpotType): boolean {
    return (
      spot == ParkingSpotType.Large ||
      spot == ParkingSpotType.Compact ||
      spot == ParkingSpotType.Small
    );
  }
}

export { Bike };