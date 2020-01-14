const Tyre = require('./Tyre');
const { TyreBlownError } = require('./Exceptions');

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
        super('Ultrasoft', hardness);
        this.grip = grip;
    }

    /**
     * Apply degradation on type and throw if tyre is blown
     * 
     * @throws TyreBlownError
     */
    degrade() {
        this.degradation -= this.grip;
        super.degrade();
    }

    /**
     * Check if type is OK or is blown
     * 
     * @return {boolean} true if tyre is NOT blown, false otherwise.
     */
    isOk() {
        return this.degradation >= 30;
    }
}

module.exports = UltrasoftTyre;
