import { ParkingSpot, ParkingSpotType } from '.';

class LargeSpot extends ParkingSpot {
  constructor(level: number, row: number, spot: number) {
    super(ParkingSpotType.Large, level, row, spot);
  }
}

export { LargeSpot };
