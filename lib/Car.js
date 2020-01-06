const { OutOfFuelError } = require('./Exceptions');

class Car {
    /**
     * Car Hourse Power
     * @type {int}
     */
    hp;

    /**
     * Car current fuel amount
     * @type {float}
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
     * @param {int} hp 
     * @param {float} fuelAmount 
     * @param {Tyre} tyre 
     */
    constructor(hp, fuelAmount, tyre) {
        // @TODO ...
    }

    /**
     * Current car speed
     */
    speed() {
        // @TODO ...
    }

    /**
     * Decrease available fuel by specified amount
     * 
     * @throws OutOfFuelError
     * @param {float} amount 
     */
    decreaseFuel(amount) {
        // @TODO ...
    }

    /**
     * Increase fuel by specified amount (max 160)
     * @param {float} amount 
     */
    increaseFuel(amount) {
        // @TODO ...
    }

    /**
     * Apply lap degradation of current tyres
     */
    degradeTyres() {
        // @TODO ...
    }
}

module.exports = Car;
