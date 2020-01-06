const { OutOfFuelError } = require('./Exceptions');

class Car {
    constructor(hp, fuelAmount, tyre) {
        this.hp = hp;
        this.fuelAmount = 0;
        this.tyre = tyre;

        this.increaseFuel(fuelAmount);
    }

    speed() {
        return (this.hp + this.tyre.degradation) / this.fuelAmount;
    }

    decreaseFuel(consumedFuel) {
        if (this.fuelAmount < consumedFuel) {
            throw new OutOfFuelError();
        }
        this.fuelAmount -= consumedFuel;
    }

    increaseFuel(amount) {
        this.fuelAmount += amount;
        if (this.fuelAmount > 160) {
            this.fuelAmount = 160;
        }
    }

    degradeTyres() {
        return this.tyre.degrade();
    }
}

module.exports = Car;
