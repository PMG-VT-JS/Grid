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
    failureReason = null;
    completedLaps = 0;

    /**
     * Initialize driver
     * 
     * @param {string} name Driver's name
     * @param {Car} car 
     * @param {number} fuelConsumptionPerKm
     */
    constructor(name, car, fuelConsumptionPerKm) {
        this.name = name;
        this.car = car;
        this.fuelConsumptionPerKm = fuelConsumptionPerKm;
    }

    /* istanbul ignore next */
    /**
     * Current driver speed
     * @return {number}
     */
    speed() {
        return this.car.speed();
    }
}

module.exports = Driver;