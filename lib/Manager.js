const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.constructor.name;
    }

    getId() {
        return this.constructor.id;
    }

    getEmail() {
        return this.constructor.email;
    }

    getOfficeNumber() {
        return this.constructor.officeNumber;
    }
}

module.exports = Manager;
