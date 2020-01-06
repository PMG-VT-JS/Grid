const factories = require('./factories');

class RaceTower {
    /**
     * Total count of race laps 
     * @type {number}
     */
    lapsNumber;

    /**
     * @type {number}
     */
    trackLength;

    /**
     * List of registered drivers
     * 
     * @type {Driver[]}
     */
    drivers = [];

    /**
     * Race laps completed so far
     * @type {number}
     */
    lapsCompleted = 0;

    constructor(tyreFactory, carFactory, driverFactory) {
        this.tyreFactory = tyreFactory || factories.tyreFactory;
        this.carFactory = carFactory || factories.carFactory;
        this.driverFactory = driverFactory || factories.driverFactory;
    }

    /**
     * Implement SetTrackInfo command
     * @param {number} lapsNumber
     * @param {number} trackLength
     */
    setTrackInfo(lapsNumber, trackLength) {
        this.lapsNumber = lapsNumber;
        this.trackLength = trackLength;
    }

    registerDriver(commandArgs) {
        const [type, name, hp, fuelAmount, tyreType, tyreHardness, grip] = commandArgs;

        const tyre = this.tyreFactory(tyreType, parseFloat(tyreHardness), parseFloat(grip));
        const car = this.carFactory(parseInt(hp, 10), parseFloat(fuelAmount), tyre);
        const driver = this.driverFactory(type, name, car);

        this.drivers.push(driver);
    }

    get lapsRemaining() {
        return this.lapsNumber - this.lapsCompleted;
    }

    /**
     * Implement CompleteLaps command: All drivers advance with the specified number of laps 
     *
     * @param {string[]} commandArgs
     * @param {string} commandArgs[0] numberOfLaps
     * @return {string|undefined} Either error message ("There is no time ..."), 
     *                            or winner message ("xxx wins the race ...")
     *                            or ... nothing (undefined)
     */
    completeLaps(commandArgs) {
        const [ numberOfLapsStr ] = commandArgs;
        let numberOfLaps = parseInt(numberOfLapsStr, 10);

        if (this.lapsRemaining < numberOfLaps) {
            return `There is no time! On lap ${this.lapsCompleted}.`;
        }

        this.lapsCompleted += numberOfLaps;

        while (numberOfLaps-- > 0) {
            this.drivers
                .filter(driver => driver.failureReason === null)
                .forEach(driver => this.completeLap(driver));
        }

        this.sortDrivers();

        if (this.lapsRemaining === 0) {
            const [ winner ] = this.drivers;
            return `${winner.name} wins the race for ${this.timeOrFailure(winner)} seconds.`;
        }
    }

    /**
     * 
     * @param {Driver} driver 
     */
    completeLap(driver) {
        driver.totalTime += (60 / this.trackLength * driver.speed());
        try {
            driver.car.decreaseFuel(this.trackLength * driver.fuelConsumptionPerKm);
            driver.car.degradeTyres();
            driver.completedLaps++;
        } catch (ex) {
            driver.failureReason = ex;
        }
    }

    sortDrivers() {
        this.drivers.sort((d1, d2) => {
            if (d1.failureReason && d2.failureReason) {
                return d2.completedLaps - d1.completedLaps
            } else if (d1.failureReason) {
                return 1;
            } else if (d2.failureReason) {
                return -1;
            }

            return d1.totalTime - d2.totalTime;
        });
    }

    getLeaderboard() {
        return [
            `Lap ${this.lapsCompleted} / ${this.lapsNumber}`
        ].concat(this.drivers.map((driver, idx) => {
            return `${idx + 1} ${driver.name} ${this.timeOrFailure(driver)}`
        }));
    }

    timeOrFailure(driver) {
        if (driver.failureReason) {
            return driver.failureReason.message;
        }

        return Number(driver.totalTime).toFixed(3);
    }

    driverBoxes(commandArgs) {
        const [reasonToBox, driverName, tyreTypeOrFuelAmount, tyreHardness, grip] = commandArgs;
        const driver = this.drivers.find(driver => driver.name === driverName);
        
        switch (reasonToBox) {
            case 'ChangeTyres':
                driver.car.tyre = this.tyreFactory(tyreTypeOrFuelAmount, parseFloat(tyreHardness), parseFloat(grip));
                break;
            case 'Refuel':
                driver.car.increaseFuel(parseFloat(tyreTypeOrFuelAmount));
                break;
        }

        driver.totalTime += 20;
    }
}

module.exports = RaceTower;
