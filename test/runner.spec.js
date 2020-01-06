const sinon = require('sinon');
const { expect } = require('./setup');
const { runner } = require('../index');

describe('runner', () => {
    describe('Scenario 1', () => {
        const input = [
            '32',
            '3',
            'RegisterDriver Aggressive FirstDriver 650 140 Ultrasoft 0.2 3.8',
            'RegisterDriver Endurance SecondDriver 467 78.48 Hard 0.8',
            'RegisterDriver Endurance ThirdDriver 160 78.48 Ultrasoft 0.4 2.7',
            'CompleteLaps 17',
            'Leaderboard',
            'Box Refuel SecondDriver 98.28',
            'CompleteLaps 15',
        ];

        let raceTower;

        beforeEach(() => {
            raceTower = {
                setTrackInfo: sinon.spy(),
                registerDriver: sinon.spy(),
                completeLaps: sinon.spy(),
                driverBoxes: sinon.spy(),
                getLeaderboard: sinon.spy(),
            };
        })

        it('SetTrackInfo', () => {
            runner(input, raceTower);
            expect(raceTower.setTrackInfo).to.have.been.calledWith(32, 3);
        });

        it('RegisterDriver', () => {
            runner(input, raceTower);

            expect(raceTower.registerDriver).to.have.been.calledWith(['Aggressive', 'FirstDriver', '650', '140', 'Ultrasoft', '0.2', '3.8']);
            expect(raceTower.registerDriver).to.have.been.calledWith(['Endurance', 'SecondDriver', '467', '78.48', 'Hard', '0.8']);
            expect(raceTower.registerDriver).to.have.been.calledWith(['Endurance', 'ThirdDriver', '160', '78.48', 'Ultrasoft', '0.4', '2.7']);
        });

        it('CompleteLaps', () => {
            runner(input, raceTower);

            expect(raceTower.completeLaps).to.have.been.calledWith(['17']);
            expect(raceTower.completeLaps).to.have.been.calledWith(['15']);
        });

        it('Leaderboard', () => {
            runner(input, raceTower);

            expect(raceTower.getLeaderboard).to.have.been.calledWith();
        });

        it('Box', () => {
            runner(input, raceTower);

            expect(raceTower.driverBoxes).to.have.been.calledWith(['Refuel', 'SecondDriver', '98.28']);
        });

        it('returns concatenated commands output', () => {
            raceTower.completeLaps = sinon.stub().onCall(1).returns(
                'SecondDriver wins the race for 9838.183 seconds.',
            ).returns(undefined);
            raceTower.getLeaderboard = sinon.stub().onCall(0).returns([
                'Lap 17 / 32',
                '1 ThirdDriver 2896.110',
                '2 FirstDriver 6918.938',
                '3 SecondDriver 7209.032',
            ]);
            const expectation = [
                'Lap 17 / 32',
                '1 ThirdDriver 2896.110',
                '2 FirstDriver 6918.938',
                '3 SecondDriver 7209.032',
                'SecondDriver wins the race for 9838.183 seconds.',
            ];
            const output = runner(input, raceTower);

            expect(output).to.be.eql(expectation);
        });
    });
});