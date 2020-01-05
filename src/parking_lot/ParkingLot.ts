import { Floor } from './Floor';
import { Vehicle } from './vehicles/Vehicle';
import { ParkingTicket } from './ParkingTicket';

class ParkingLotFullException extends Error {}

class ParkingLot {
  private static instance: ParkingLot;
  private floors: Floor[] = [];

  private constructor() {}

  static getInstance(): ParkingLot {
    if (!this.instance) {
      this.instance = new ParkingLot();
    }

    return this.instance;
  }

  static resetInstance(): void {
    this.instance = new ParkingLot();
  }

  addFloors(numFloors: number, spotsPerFloor: number): void {
    for (let i = 0; i < numFloors; i++) {
      this.floors.push(new Floor(i, spotsPerFloor));
    }
  }

  park(vehicle: Vehicle): void {
    if (this.isFull(vehicle)) {
      throw new ParkingLotFullException();
    }
  }

  getNewParkingTicket(): ParkingTicket {
    return new ParkingTicket();
  }

  isFull(vehicle: Vehicle): boolean {
    return !this.floors.some((floor: Floor) => floor.canPark(vehicle));
  }

  getNumberOfFloors(): number {
    return this.floors.length;
  }

  getTotalSpots(): number {
    return this.floors.reduce((acc: number, curr: Floor) => {
      acc += curr.getTotalSpots();
      return acc;
    }, 0);
  }
}

export { ParkingLot, ParkingLotFullException };
