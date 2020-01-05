import { Vehicle, VehicleType } from '.';

class OversizedTruck extends Vehicle {
  constructor() {
    super(VehicleType.OversizedTruck);
  }

  canParkIn(): boolean {
    // Too large to park
    return false;
  }
}

export { OversizedTruck };
