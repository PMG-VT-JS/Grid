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
        this.name = name;
        this.hardness = hardness;
    }

    /**
     * Apply degradation on tyre and throw if tyre is blown
     * 
     * @throws TyreBlownError
     */
    degrade() {
        this.degradation -= this.hardness;
        if (!this.isOk()) {
            throw new TyreBlownError();
        }
    }

    /**
     * Check if type is OK or is blown
     * 
     * @return {boolean} true if tyre is NOT blown, false otherwise.
     */
    isOk() {
        return this.degradation > 0;
    }
}

module.exports = Tyre;
