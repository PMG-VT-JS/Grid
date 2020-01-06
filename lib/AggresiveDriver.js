const Driver = require('./Driver');

const FUEL_CONSUMPTION_PER_KM = 2.7; 

class AggresiveDriver extends Driver {
    constructor(name, car) {
        super(name, car, FUEL_CONSUMPTION_PER_KM);
    }
    
    /* istanbul ignore next */
    /**
     * @return {float}
     */
    speed() {
        return super.speed() * 1.3;
    }
}

module.exports = AggresiveDriver;
