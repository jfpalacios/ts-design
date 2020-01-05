import { ParkingSpot, ParkingSpotType } from '.';

class SmallSpot extends ParkingSpot {
  constructor(level: number, row: number, spot: number) {
    super(ParkingSpotType.Small, level, row, spot);
  }
}

export { SmallSpot };
