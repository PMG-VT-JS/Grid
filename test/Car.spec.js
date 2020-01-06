const Car = require('../lib/Car');
const { expect } = require('./setup');
const { OutOfFuelError } = require('../lib/Exceptions');

describe('Car', () => {
    /** @type {Car} */
    let car;

    beforeEach(() => {
        car = new Car(100, 100, {});
    });

    it('increaseFuel', () => {
        car.increaseFuel(10.55);
        expect(car.fuelAmount).to.be.equal(110.55);

        car.increaseFuel(200)
        expect(car.fuelAmount).to.be.equal(160); // Max 160!
    });

    it('decreaseFuel', () => {
        car.decreaseFuel(10.55);
        expect(car.fuelAmount).to.be.equal(89.45);

        expect(() => car.decreaseFuel(100)).to.throw(OutOfFuelError);
        // expect(car.fuelAmount).to.be.lessThan(0);
    });
});