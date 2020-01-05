import { ParkingSpot, ParkingSpotType } from '.';

class CompactSpot extends ParkingSpot {
  constructor(level: number, row: number, spot: number) {
    super(ParkingSpotType.Compact, level, row, spot);
  }
}

export { CompactSpot };
