const { OutOfFuelError } = require('./Exceptions');

class Car {
    /**
     * Car Hourse Power
     * @type {int}
     */
    hp;

    /**
     * Car current fuel amount
     * @type {number}
     */
    fuelAmount;

    /**
     * Current tyre type
     * @type {Tyre}
     */
    tyre;

    /**
     * Initialize car
     * 
     * @param {number} hp
     * @param {number} fuelAmount
     * @param {Tyre} tyre 
     */
    constructor(hp, fuelAmount, tyre) {
       this.hp = hp;
       this.fuelAmount = fuelAmount;
       this.tyre = tyre;
    }

    /* istanbul ignore next */
    /**
     * Current car speed
     * @returns {number}
     */
    speed() {
        // @TODO ...
    }

    /**
     * Decrease available fuel by specified amount
     * 
     * @throws OutOfFuelError
     * @param {number} amount
     */
    decreaseFuel(amount) {
        this.fuelAmount -= amount;
        if (this.fuelAmount < 0) {
            throw new OutOfFuelError();
        }
    }

    /**
     * Increase fuel by specified amount (max 160)
     * @param {number} amount 
     */
    increaseFuel(amount) {
        this.fuelAmount += amount;
        this.fuelAmount = Math.min(this.fuelAmount, 160);
    }

    /* istanbul ignore next */
    /**
     * Apply lap degradation of current tyres
     */
    degradeTyres() {
        // @TODO ...
    }
}

module.exports = Car;
