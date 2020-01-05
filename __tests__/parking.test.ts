import {
  ParkingLot,
  ParkingLotFullException,
  Car,
  OversizedTruck,
} from '../src/parking_lot';

describe('parking lot', () => {
  it('is a singleton', () => {
    const p1 = ParkingLot.getInstance();
    const p2 = ParkingLot.getInstance();

    expect(p1).toBe(p2);
  });

  it('adds floors', () => {
    const p1 = ParkingLot.getInstance();
    p1.addFloors(2, 20);
    expect(p1.getTotalSpots()).toEqual(40);
  });

  it('can park vehicles', () => {
    ParkingLot.resetInstance();
    const p1 = ParkingLot.getInstance();
    p1.addFloors(1, 5);
    const car = new Car();
    const oversized = new OversizedTruck();

    expect(p1.getTotalSpots()).toEqual(5);
    expect(p1.isFull(car)).toBeFalsy();
    expect(p1.isFull(oversized)).toBeTruthy();
  });
});
