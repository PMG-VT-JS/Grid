const Tyre = require('./Tyre');

class HardTyre extends Tyre {
    /**
     * @param {number} hardness
     */
    constructor(hardness) {
        super("Hard",hardness);
    }
}

module.exports = HardTyre;
