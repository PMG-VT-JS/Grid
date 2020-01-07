const sinon = require('sinon');
const { expect } = require('./setup');
const { RaceTower } = require('../index');

describe('RaceTower', () => {
    /** @type {RaceTower} */
    let raceTower;
    let tyreFactory, carFactory, driverFactory;
    let theDriver, anotherDriver;
    let car, tyre;

    beforeEach(() => {
        car = { note: 'This is a car' };
        tyre = { note: 'This is a tyre' };
        
        tyreFactory = sinon.stub().returns(tyre);
        carFactory = sinon.stub().returns(car);
        driverFactory = sinon.fake();

        raceTower = new RaceTower(tyreFactory, carFactory, driverFactory);

        theDriver = {
            name: 'TheDriver',
            totalTime: 100, car: {},
            failureReason: null,
            speed: sinon.fake(),
            currentAchievement: sinon.fake(),
        };
        anotherDriver = {
            name: 'AnotherDriver',
            totalTime: 100,
            car: { increaseFuel: sinon.fake() },
            failureReason: null,
            speed: sinon.fake(),
            currentAchievement: sinon.fake(),
        };
        raceTower.drivers = [anotherDriver, theDriver];
        raceTower.setTrackInfo(10, 1);
    });

    it('SetTrackInfo', () => {
        raceTower.setTrackInfo(10, 2);

        expect(raceTower.lapsNumber).to.be.equal(10);
        expect(raceTower.trackLength).to.be.equal(2);
    });

    it('registerDriver', () => {
        raceTower.drivers = [];

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

    it('driverBoxes', () => {
        raceTower.driverBoxes(['ChangeTyres', theDriver.name, 'Ultrasoft', '1.45', '3.21']);
        expect(tyreFactory).to.have.been.calledWith('Ultrasoft', 1.45, 3.21);
        expect(theDriver.totalTime).to.be.equal(120);
        expect(theDriver.car.tyre).to.be.equal(tyre);
        expect(anotherDriver.totalTime).to.be.equal(100);

        raceTower.driverBoxes(['Refuel', anotherDriver.name, '121.12']);
        expect(anotherDriver.car.increaseFuel).to.have.been.calledWith(121.12);
        expect(theDriver.totalTime).to.be.equal(120);
        expect(anotherDriver.totalTime).to.be.equal(120);
    });

    describe('completeLaps', () => {
        it('tracks completed laps', () => {
            const result = raceTower.completeLaps(['5']);
            expect(result).to.be.undefined;
            expect(raceTower.lapsCompleted).to.be.equal(5);
        });

        it('sorts drivers on each call', () => {
            raceTower.sortDrivers = sinon.fake();
            raceTower.completeLaps(['5']);
            expect(raceTower.sortDrivers).to.have.been.calledOnceWith();
        });

        it('doesn\'t make too many laps', () => {
            const result = raceTower.completeLaps(['20']);
            expect(result).to.be.equal('There is no time! On lap 0.')
        });

        it('returns string on race completion', () => {
            const result = raceTower.completeLaps(['10']);
            expect(typeof result).to.be.equal('string');
        });
    });

    it('getLeaderboard', () => {
        const result = raceTower.getLeaderboard();
        expect(result).to.have.length(3);
    });
});