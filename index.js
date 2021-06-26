const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const generateTeam = require("./src/page-template");
const team = [];

const questions = [
  {
    type: "list",
    message: "What is the role of the team member?",
    name: "add",
    choices: ["Engineer", "Intern", "None"],
  },
];

function manager() {
  inquirer.prompt(managerQuestions).then((res) => {
    const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    team.push(manager);
    addQs();
  });
}

function engineer() {
  inquirer.prompt(engineerQuestions).then((res) => {
    const engineer = new Engineer(res.name, res.id, res.email, res.github);
    team.push(engineer);
    addQs();
  });
}

function intern() {
  inquirer.prompt(internQuestions).then((res) => {
    const intern = new Intern(res.name, res.id, res.email, res.school);
    team.push(intern);
    addQs();
  });
}

function addQs() {
  inquirer.prompt(moreQs).then((response) => {
    switch (response.add) {
      case "Engineer":
        engineer();
        break;
      case "Intern":
        intern();
        break;
      default:
        console.log("HTML file has been generated");
        fs.writeFileSync("./output/index.html", generateTeam(team));
    }
  });
}

const managerQuestions = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the manager's e-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's e-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's e-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "school",
  },
];

function init() {
  console.log("Add team members: ");
  manager();
}

init();
