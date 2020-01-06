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
     * @type {float}
     */
    fuelConsumptionPerKm;

    /**
     * Driver's current race tiime
     * 
     * @type {float}
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
     * @param {float} fuelConsumptionPerKm 
     */
    constructor(name, car, fuelConsumptionPerKm) {
        // @TODO ...
    }

    /**
     * Current driver speed
     * @return {float}
     */
    speed() {
        // @TODO ...
    }
}

module.exports = Driver;