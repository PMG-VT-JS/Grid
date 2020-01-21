const EnduranceDriver = require('../lib/EnduranceDriver');
const AggresiveDriver=require('../lib/AggresiveDriver')
const Car = require('../lib/Car');
const HardTyre = require('../lib/HardTyre');
const { expect } = require('./setup');
const { OutOfFuelError } = require('../lib/Exceptions');

describe.only('Driver', () => {
    /** @type {Car} */
    let car;
    let tyre
    let driver;
    let driver2;

    beforeEach(() => {
        tyre=new HardTyre(50);
        car = new Car(100, 100, tyre);
        driver = new EnduranceDriver("Ivan",car);
        driver2=new AggresiveDriver("Petar",car);
    });
    it('speed',() => {
        const sp=driver2.speed();
        expect(sp).to.be.equal(2.6);
    })
    /*it('increaseFuel', () => {
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
    });*/
});