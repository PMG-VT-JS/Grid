const { tyreFactory, carFactory, driverFactory } = require('../lib/factories');
const UltrasoftTyre = require('../lib/UltrasoftTyre');
const HardTyre = require('../lib/HardTyre');
const Tyre = require('../lib/Tyre');
const Car = require('../lib/Car');
const AggressiveDriver = require('../lib/AggresiveDriver');
const EnduranceDriver = require('../lib/EnduranceDriver');
const { expect } = require('./setup');

describe('factories', () => {
    it('tyreFactory creates untrasoft tyres', () => {
        /** @type UltrasoftTyre */
        const tyre = tyreFactory('Ultrasoft', 1.2, 2.1);

        expect(tyre).to.be.instanceOf(UltrasoftTyre);
        expect(tyre.hardness).to.be.equal(1.2);
        expect(tyre.grip).to.be.equal(2.1);
        expect(tyre.name).to.be.equal('Ultrasoft');
    });

    it('tyreFactory creates hard tyres', () => {
        /** @type HardTyre */
        const tyre = tyreFactory('Hard', 1.2);
        expect(tyre).to.be.instanceOf(HardTyre);
        expect(tyre.hardness).to.be.equal(1.2);
        expect(tyre.name).to.be.equal('Hard');
    });

    it('tyreFactory creates any tyres', () => {
        /** @type Tyre */
        const tyre = tyreFactory('Any', 1.2);
        expect(tyre).to.be.instanceOf(Tyre);
        expect(tyre.hardness).to.be.equal(1.2);
        expect(tyre.name).to.be.equal('Any');
    });

    it('carFactory creates a car', () => {
        const tyre = { name: 'Mock tyre' };
        /** @type Car */
        const car = carFactory(150, 123.45, tyre);
        expect(car).to.be.instanceOf(Car);
        expect(car.hp).to.be.equal(150);
        expect(car.fuelAmount).to.be.equal(123.45);
        expect(car.tyre).to.be.equal(tyre);
    });

    it('driverFactory creates aggresive driver', () => {
        const car = { name: 'Mock car' };
        /** @type AggressiveDriver */
        const driver = driverFactory('Aggressive', 'DriverName', car);
        expect(driver).to.be.instanceOf(AggressiveDriver);
        expect(driver.name).to.be.equal('DriverName');
        expect(driver.car).to.be.equal(car);
    });

    it('driverFactory creates endurance driver', () => {
        const car = { name: 'Mock car' };
        /** @type EnduranceDriver */
        const driver = driverFactory('Endurance', 'DriverName', car);
        expect(driver).to.be.instanceOf(EnduranceDriver);
        expect(driver.name).to.be.equal('DriverName');
        expect(driver.car).to.be.equal(car);
    });
});