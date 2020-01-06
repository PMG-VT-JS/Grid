const { runner } = require('../index');
const { expect } = require('chai');

describe('Integration Test', () => {
    it('Scenario 1', () => {
        const scenario = [
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

        const expectation = [
            'Lap 17 / 32',
            '1 ThirdDriver 2896.110',
            '2 FirstDriver 6918.938',
            '3 SecondDriver 7209.032',
            'SecondDriver wins the race for 9838.183 seconds.',
        ];

        const output = runner(scenario);

        expect(output).to.be.eql(expectation);
    });

    it('Scenario 2', () => {
        const scenario = [
            '10',
            '5',
            'RegisterDriver Aggressive FirstDriver 650 140 Ultrasoft 10.2 3.0',
            'RegisterDriver Aggressive SecondDriver 650 140 Hard 3.9',
            'RegisterDriver Endurance ThirdDriver 360 78.48 Ultrasoft 2.4 0.7',
            'CompleteLaps 14',
            'CompleteLaps 8',
            'Leaderboard',
            'Box ChangeTyres ThirdDriver Hard 0.3',
            'CompleteLaps 2',
        ];

        const expectation = [
            'There is no time! On lap 0.',
            'Lap 8 / 10',
            '1 ThirdDriver 931.587',
            '2 SecondDriver 1124.098',
            '3 FirstDriver Blown Tyre',
            'ThirdDriver wins the race for 1752.693 seconds.',
        ];

        const output = runner(scenario);

        expect(output).to.be.eql(expectation);
    });

    it('Scenario 3', () => {
        const scenario = [
            '14',
            '5',
            'RegisterDriver Endurance FirstDriver 650 140 Hard 0.2',
            'RegisterDriver Endurance SecondDriver 650 140 Ultrasoft 0.2 0.3',
            'RegisterDriver Aggressive ThirdDriver 350 100 Ultrasoft 0.2 0.3',
            'RegisterDriver Aggressive FourthDriver 450 60 Hard 1.2',
            'CompleteLaps 1',
            'Leaderboard',
            'Box Refuel FourthDriver 168',
            'CompleteLaps 6',
            'Box Refuel FourthDriver 2',
            'CompleteLaps 6',
            'Leaderboard',
            'CompleteLaps 1',
        ];

        const expectation = [
            'Lap 1 / 14',
            '1 FirstDriver 64.286',
            '2 SecondDriver 64.286',
            '3 ThirdDriver 70.200',
            '4 FourthDriver 143.000',
            'Lap 13 / 14',
            '1 SecondDriver 1353.124',
            '2 FirstDriver 1357.036',
            '3 FourthDriver 2122.949',
            '4 ThirdDriver Out of fuel',
            'SecondDriver wins the race for 1563.054 seconds.',
        ];

        const output = runner(scenario);

        expect(output).to.be.eql(expectation);
    });
});
