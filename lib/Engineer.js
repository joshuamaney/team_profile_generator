const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub() {
        return this.constructor.github;
    }
}

module.exports = Engineer;
