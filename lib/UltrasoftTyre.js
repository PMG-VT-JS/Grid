const Tyre = require('./Tyre');

class UltrasoftTyre extends Tyre {
    /**
     * @type {number}
     */
    grip;

    /**
     * Initialize Ultrasoft tyre
     * 
     * @param {number} hardness
     * @param {number} grip
     */
    constructor(hardness, grip) {
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

module.exports = UltrasoftTyre;
