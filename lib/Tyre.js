const { TyreBlownError } = require('./Exceptions');

const INITIAL_DEGRADATION = 100;

class Tyre {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {number}
     */
    hardness;

    /**
     * Current tyre's degradation
     * 
     * @type {number}
     */
    degradation = INITIAL_DEGRADATION;

    /**
     * Initialize tyre
     * 
     * @param {string} name 
     * @param {number} hardness
     */
    constructor(name, hardness) {
        // @TODO ...
    }

    /**
     * Apply degradation on type and throw if tyre is blown
     * 
     * @throws TyreBlownError
     */
    degrade() {
        // @TODO ...
    }

    /**
     * Check if type is OK or is blown
     * 
     * @return {boolean} true if tyre is NOT blown, false otherwise.
     */
    isOk() {
        // @TODO ...
    }
}

module.exports = Tyre;
