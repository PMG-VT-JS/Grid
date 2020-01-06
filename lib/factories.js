const Tyre = require('./Tyre');
const HardTyre = require('./HardTyre');
const UltrasoftTyre = require('./UltrasoftTyre');
const Car = require('./Car');
const AggresiveDriver = require('./AggresiveDriver');
const EnduranceDriver = require('./EnduranceDriver');

/**
 * Create concrete Tyre instance based on type
 * 
 * @param {string} type
 * @param {number} hardness
 * @param {number} grip
 * @return {Tyre}
 */
function tyreFactory(type, hardness, grip) {
    // @TODO ...
}

/**
 * Create concrete Car instance
 *
 * @param {number} hp
 * @param {number} fuelAmount
 * @param {Tyre} tyre 
 */
function carFactory(hp, fuelAmount, tyre) {
    // @TODO ...
}

/**
 * Create concrete Driver instance based on type
 *
 * @param {string} type 
 * @param {string} name 
 * @param {Car} car 
 */
function driverFactory(type, name, car) {
    // @TODO ...
}

module.exports = {
    tyreFactory,
    carFactory,
    driverFactory,
};
