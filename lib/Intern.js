const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    getSchool() {
        return this.constructor.school;
    }
}

module.exports = Intern;
