class Driver {
    totalTime = 0;
    failureReason = null;
    completedLaps = 0;

    constructor(name, car, fuelConsumptionPerKm) {
        this.name = name;
        this.car = car;
        this.fuelConsumptionPerKm = fuelConsumptionPerKm;
    }

    speed() {
        return this.car.speed();
    }
}

module.exports = Driver;