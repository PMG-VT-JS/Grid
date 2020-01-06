const Tyre = require('../lib/Tyre');
const { expect } = require('./setup');
const { TyreBlownError } = require('../lib/Exceptions');

describe('Tyre', () => {
    /** @type {Tyre} */
    let tyre;

    beforeEach(() => {
        tyre = new Tyre('Name', 50);
    });

    it('degrade', () => {
        tyre.degrade();

        expect(tyre.degradation).to.be.equal(50);
        expect(tyre.isOk()).to.be.true;
    });

    it('blows', () => {
        tyre.degrade();
        expect(() => tyre.degrade()).to.throw(TyreBlownError);
        expect(tyre.degradation).to.be.equal(0);
    });
});