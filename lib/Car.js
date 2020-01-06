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
        // @TODO ...
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
        // @TODO ...
    }

    /**
     * Increase fuel by specified amount (max 160)
     * @param {number} amount 
     */
    increaseFuel(amount) {
        // @TODO ...
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
