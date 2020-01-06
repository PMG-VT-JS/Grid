const factories = require('./factories');

class RaceTower {
    /**
     * Total count of race laps 
     * @type {int}
     */
    lapsNumber;

    /**
     * @type {int}
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
     * @type {int}
     */
    lapsCompleted = 0;

    /**
     * 
     * @param {Function} [tyreFactory ]
     * @param {Function} [carFactory ]
     * @param {Function} [driverFactory ]
     */
    constructor(tyreFactory, carFactory, driverFactory) {
        this.tyreFactory = tyreFactory || factories.tyreFactory;
        this.carFactory = carFactory || factories.carFactory;
        this.driverFactory = driverFactory || factories.driverFactory;
    }

    /**
     * Implement SetTrackInfo command
     * @param {int} lapsNumber 
     * @param {float} trackLength 
     */
    setTrackInfo(lapsNumber, trackLength) {
        // @TODO ...
    }

    /**
     * Implement RegisterDriver command: create driver and register them
     *
     * @param {Array} commandArgs
     * @param {string} commandArgs[0] type - "Aggressive" или "Endurance"
     * @param {string} commandArgs[1] name - driver name
     * @param {string} commandArgs[2] hp - Car HP
     * @param {string} commandArgs[3] fuelAmount
     * @param {string} commandArgs[4] tyreType
     * @param {string} commandArgs[5] tyreHardness
     * @param {string} [commandArgs[6]] grip - само ако tyreType е "Ultrasoft"
     * @return {void}
     */
    registerDriver(commandArgs) {
        // @TODO ...
    }

    /**
     * Implement CompleteLaps command: All drivers advance with the specified number of laps 
     *
     * @param {Array} commandArgs
     * @param {string} commandArgs[0] numberOfLaps
     * @return {string|undefined} Either error message ("There is no time ..."), 
     *                            or winner message ("xxx wins the race ...")
     *                            or ... nothing (undefined)
     */
    completeLaps(commandArgs) {
        // @TODO ...
    }

    /**
     * Implement Leaderboard command according to specification
     * 
     * @return {string[]}
     */
    getLeaderboard() {
        // @TODO ...
    }

    /**
     * Implement Box command according to specification
     *
     * @param {Array} commandArgs
     * @param {string} commandArgs[0] reasonToBox - "ChangeTyres" или "Refuel"
     * @param {string} commandArgs[1] driversName - driver name
     * @param {string} commandArgs[2] tyreType / fuelAmount - depends on `reasonToBox`
     * @param {string} [commandArgs[3]] tyreHardness - ако reasonToBox === "ChangeTyres"
     * @param {string} [commandArgs[4]] grip - only if reasonToBox === "ChangeTyres" && tyreType === "Ultrasoft"
     * @return {void}
     */
    driverBoxes(commandArgs) {
        // @TODO ...
    }
}

module.exports = RaceTower;