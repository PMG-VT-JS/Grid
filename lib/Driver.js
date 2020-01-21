const Tyre = require('../lib/Tyre');
const Car = require('../lib/Car');
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
        this.name=name;
        this.car=car;
        this.fuelConsumptionPerKm=fuelConsumptionPerKm;
    }

    /* istanbul ignore next */
    /**
     * Current driver speed
     * @return {number}
     */
    speed() {
        //return this.car.fuelAmount;
        let result= (this.car.hp+this.car.tyre.degradation)/this.car.fuelAmount;
        return result;
    }

    /**
     * Either current driver's time (rounded to 3 decimal digits) or the reason for DNF
     * 
     * @return {string}
     */
    currentAchievement() {
    }

}

module.exports = Driver;