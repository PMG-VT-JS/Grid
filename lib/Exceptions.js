class OutOfFuelError extends Error {
    constructor() {
        super('Out of fuel');
    }
}

class TyreBlownError extends Error {
    constructor() {
        super('Blown Tyre');
    }
}

module.exports = {
    OutOfFuelError,
    TyreBlownError,
};
