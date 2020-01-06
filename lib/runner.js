const RaceTower = require('./RaceTower');

/**
 * Обработва входа и връща изхода от играта
 * 
 * @param {string[]} input 
 * @return {string[]}
 */
function runner(input, raceTower) {
    raceTower = raceTower || new RaceTower();
    const [lapsNumber, trackLength, ...commandsLines] = input;
    let output = [];

    raceTower.setTrackInfo(parseInt(lapsNumber, 10), parseInt(trackLength, 10));

    for (const commandLine of commandsLines) {
        const [command, ...commandArgs] = commandLine.split(' ');
        switch (command) {
            case 'RegisterDriver':
                raceTower.registerDriver(commandArgs);
                break;
            case 'CompleteLaps':
                const reply = raceTower.completeLaps(commandArgs);
                if (reply !== undefined) {
                    output.push(reply);
                }
                break;
            case 'Leaderboard':
                output = output.concat(raceTower.getLeaderboard());
                break;
            case 'Box':
                raceTower.driverBoxes(commandArgs);
                break;
        }
    }

    return output;
}

module.exports = runner;
