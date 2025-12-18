// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber) {
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
    }
}

class Team {
    #starters = [];
    #bench = [];
    constructor(name) {
        this.name = name;
    }
    get starters() {
        return this.#starters;
    }
    get bench() {
        return this.#bench;
    }
    addBenchPlayer(player) {
        this.#bench.push(player)
    }
    getPlayerCount() {
        return this.#starters.length + this.#bench.length
    }
    moveToBench(name) {
        let findPlayer = this.#starters.find((starter)=> starter.name === name)
        if (!findPlayer) {
            return false;
        }
        let index = this.#starters.indexOf(findPlayer)
        this.#starters.splice(index, 1);
        this.#bench.push(findPlayer);
        return true;
    }
    moveToStarters(name) {
        let foundIndex = this.addBenchPlayer.findIndex((player => player.name === name))
        if(foundIndex === -1) {
            return false
        }
        let found = this.#bench.splice(foundIndex, 1)
        this.#starters.push(found)
        return true;
    }
}

module.exports = { Player, Team };

