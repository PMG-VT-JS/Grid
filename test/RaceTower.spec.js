const sinon = require('sinon');
const { expect } = require('./setup');
const { RaceTower } = require('../index');

describe('RaceTower', () => {
    it('SetTrackInfo', () => {
        const raceTower = new RaceTower();
        
        raceTower.setTrackInfo(10, 2);

        expect(raceTower.lapsNumber).to.be.equal(10);
        expect(raceTower.trackLength).to.be.equal(2);
    });

    it('registerDriver', () => {
        const car = { note: 'This is a car' };
        const tyre = { note: 'This is a tyre' };
        const driver = { note: 'This is a driver' };
        const tyreFactory = sinon.stub().returns(tyre);
        const carFactory = sinon.stub().returns(car);
        const driverFactory = sinon.stub().returns(driver);

        const raceTower = new RaceTower(tyreFactory, carFactory, driverFactory);
        
        raceTower.registerDriver(['Aggressive', 'FirstDriver', '650', '140', 'Ultrasoft', '0.2', '3.8']);
        raceTower.registerDriver(['Endurance', 'SecondDriver', '467', '78.48', 'Hard', '0.8']);

        expect(tyreFactory).to.have.been.calledWith('Ultrasoft', 0.2, 3.8);
        expect(carFactory).to.have.been.calledWith(650, 140, tyre);
        expect(driverFactory).to.have.been.calledWith('Aggressive', 'FirstDriver', car);

        expect(tyreFactory).to.have.been.calledWith('Hard', 0.8);
        expect(carFactory).to.have.been.calledWith(467, 78.48, tyre);
        expect(driverFactory).to.have.been.calledWith('Endurance', 'SecondDriver', car);

        expect(raceTower.drivers).to.have.length(2);
    });
});