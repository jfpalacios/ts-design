import { Vehicle } from './vehicles';
import { ParkingSpot, LargeSpot, CompactSpot } from './spots';

class Floor {
  private parkingSpots: ParkingSpot[] = [];
  private SPOTS_PER_ROW = 20;
  private PERCENT_LARGE = 0.9;

  constructor(level: number, numberOfSpots: number) {
    const largeSpots = Math.floor(numberOfSpots * this.PERCENT_LARGE);
    const compactSpots = numberOfSpots - largeSpots;

    for (let i = 0; i < numberOfSpots; i++) {
      const row = Math.floor(i / this.SPOTS_PER_ROW);
      let spot: ParkingSpot;
      if (i < largeSpots) {
        spot = new LargeSpot(level, row, i);
      } else if (i < compactSpots + largeSpots) {
        spot = new CompactSpot(level, row, i);
      }

      this.parkingSpots.push(spot);
    }
  }

  parkInSpot(spot: ParkingSpot, vehicle: Vehicle) {

  }

  findSpot(vehicle: Vehicle): ParkingSpot {
    return null;
  }

  canPark(vehicle: Vehicle): boolean {
    return this.parkingSpots.some((spot: ParkingSpot) => {
      return spot.isAvailable() && vehicle.canParkIn(spot.type);
    });
  }

  getTotalSpots(): number {
    return this.parkingSpots.length;
  }
}

export { Floor };
