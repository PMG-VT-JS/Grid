const { TyreBlownError } = require('./Exceptions');

const INITIAL_DEGRADATION = 100;

class Tyre {
    degradation = INITIAL_DEGRADATION;

    constructor(name, hardness) {
        this.name = name;
        this.hardness = hardness;
    }

    degrade() {
        this.degradation -= this.hardness;
        if (!this.isOk()) {
            throw new TyreBlownError();
        }
    }

    isOk() {
        return this.degradation > 0;
    }
}

module.exports = Tyre;
