const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
}

module.exports = Intern;