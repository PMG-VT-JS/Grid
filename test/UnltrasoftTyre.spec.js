const UltrasoftTyre = require('../lib/UltrasoftTyre');
const { expect } = require('./setup');
const { TyreBlownError } = require('../lib/Exceptions');

describe('UltrasoftTyre', () => {
    /** @type {UltrasoftTyre} */
    let tyre;

    beforeEach(() => {
        tyre = new UltrasoftTyre(25, 15);
    });

    it('degrade', () => {
        tyre.degrade();

        expect(tyre.degradation).to.be.equal(60);
        expect(tyre.isOk()).to.be.true;
    });

    it('blows', () => {
        tyre.degrade();
        expect(() => tyre.degrade()).to.throw(TyreBlownError);
        expect(tyre.degradation).to.be.equal(20);
    });
});