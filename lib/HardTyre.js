const Tyre = require('./Tyre');

class HardTyre extends Tyre {
    constructor(hardness) {
        super('Hard', hardness);
    }
}

module.exports = HardTyre;
