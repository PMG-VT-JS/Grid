const Driver = require('./Driver');

const FUEL_CONSUMPTION_PER_KM = 2.7; 

class AggresiveDriver extends Driver {
    /**
     * 
     * @param {string} name 
     * @param {Car} car 
     */
    constructor(name, car) {
        super(name,car,2.7);
    }
    
    /* istanbul ignore next */
    /**
     * @return {number}
     */
    speed() {
        return 1.3*super.speed();
    }
}

module.exports = AggresiveDriver;
