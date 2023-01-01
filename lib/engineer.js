const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
}

module.exports = Engineer;