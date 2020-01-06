class Driver {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {Car}
     */
    car;

    /**
     * @type {number}
     */
    fuelConsumptionPerKm;

    /**
     * Driver's current race tiime
     * 
     * @type {number}
     */
    totalTime = 0;

    /**
     * Reason to fail (if any)
     * @type {Exception}
     */
    failureReason = null;

    /**
     * Laps completed by the driver so far
     * @type {int}
     */
    completedLaps = 0;

    /**
     * Initialize driver
     * 
     * @param {string} name Driver's name
     * @param {Car} car 
     * @param {number} fuelConsumptionPerKm
     */
    constructor(name, car, fuelConsumptionPerKm) {
        // @TODO ...
    }

    /* istanbul ignore next */
    /**
     * Current driver speed
     * @return {number}
     */
    speed() {
        // @TODO ...
    }
}

module.exports = Driver;