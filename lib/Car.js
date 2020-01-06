const { OutOfFuelError } = require('./Exceptions');

class Car {
    constructor(hp, fuelAmount, tyre) {
        this.hp = hp;
        this.fuelAmount = 0;
        this.tyre = tyre;

        this.increaseFuel(fuelAmount);
    }

    /* istanbul ignore next */
    /**
     * Current car speed
     */
    speed() {
        return (this.hp + this.tyre.degradation) / this.fuelAmount;
    }

    decreaseFuel(consumedFuel) {
        if (this.fuelAmount < consumedFuel) {
            throw new OutOfFuelError();
        }
        this.fuelAmount -= consumedFuel;
    }

    /**
     * Increase fuel by specified amount (max 160)
     * @param {number} amount 
     */
    increaseFuel(amount) {
        this.fuelAmount += amount;
        if (this.fuelAmount > 160) {
            this.fuelAmount = 160;
        }
    }

    /* istanbul ignore next */
    /**
     * Apply lap degradation of current tyres
     */
    degradeTyres() {
        return this.tyre.degrade();
    }
}

module.exports = Car;
