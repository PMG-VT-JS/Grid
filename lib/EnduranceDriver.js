const Driver = require('./Driver');

const FUEL_CONSUMPTION_PER_KM = 1.5; 

class EnduranceDriver extends Driver {
    constructor(name, car) {
        super(name, car, FUEL_CONSUMPTION_PER_KM);
    }
}

module.exports = EnduranceDriver;
