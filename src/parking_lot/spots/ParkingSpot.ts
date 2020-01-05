import { Vehicle } from '../vehicles/Vehicle';
import { ParkingSpotType } from '.';

abstract class ParkingSpot {
  private level: number;
  private row: number;
  private spot: number;
  private available = true;
  private vehicle: Vehicle;
  readonly type: ParkingSpotType;

  constructor(type: ParkingSpotType, level: number, row: number, spot: number) {
    this.type = type;
    this.level = level;
    this.row = row;
    this.spot = spot;
  }

  assign(vehicle: Vehicle): void {
    this.vehicle = vehicle;
    this.available = false;
  }

  free(): void {
    this.vehicle = null;
    this.available = true;
  }

  isAvailable(): boolean {
    return this.available;
  }

  getLocation(): Record<string, number> {
    return { row: this.row, spot: this.spot };
  }
}

export { ParkingSpot };
