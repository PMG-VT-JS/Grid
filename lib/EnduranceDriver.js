const Driver = require('./Driver');

const FUEL_CONSUMPTION_PER_KM = 1.5;

class EnduranceDriver extends Driver {
    /**
     * 
     * @param {string} name 
     * @param {Car} car 
     */
    constructor(name, car) {
        super(name,car,1.5);
    }
}

module.exports = EnduranceDriver;
