const Tyre = require('./Tyre');

class UltrasoftTyre extends Tyre {
    constructor(hardness, grip) {
        super('Ultrasoft', hardness);
        this.grip = grip;
    }

    degrade() {
        this.degradation -= this.grip;
        super.degrade();
    }

    isOk() {
        return this.degradation > 30;
    }
}

module.exports = UltrasoftTyre;
