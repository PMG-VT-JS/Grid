const Tyre = require('./Tyre');
const HardTyre = require('./HardTyre');
const UltrasoftTyre = require('./UltrasoftTyre');
const Car = require('./Car');
const AggresiveDriver = require('./AggresiveDriver');
const EnduranceDriver = require('./EnduranceDriver');

/**
 * 
 * @param {string} type
 * @param {number} hardness
 * @param {number} grip
 * @return {Tyre}
 */
function tyreFactory(type, hardness, grip) {
    switch (type) {
        case 'Ultrasoft':
            return new UltrasoftTyre(hardness, grip);
        case 'Hard':
            return new HardTyre(hardness);
        default:
            return new Tyre(type, hardness);
    }
}

/**
 * Create concrete Car instance
 *
 * @param {number} hp
 * @param {number} fuelAmount
 * @param {Tyre} tyre 
 */
function carFactory(hp, fuelAmount, tyre) {
    return new Car(hp, fuelAmount, tyre);
}

/**
 * 
 * @param {string} type 
 * @param {string} name 
 * @param {Car} car 
 */
function driverFactory(type, name, car) {
    switch (type) {
        case 'Aggressive':
            return new AggresiveDriver(name, car);
        case 'Endurance':
            return new EnduranceDriver(name, car);
    }
}

module.exports = {
    tyreFactory,
    carFactory,
    driverFactory,
};
