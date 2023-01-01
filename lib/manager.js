const Employee = require('./employee')

class Manager extends Employee {
    constructor(office) {
        this.office = office
    }
}

module.exports = Manager;