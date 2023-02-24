// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// in order to write the file and to run the questions
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// the paths to where the file will be made/put
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// empty array to push to with the answers from manager, intern and engineer
const team = []
// TODO: Write Code to gather information about the development team members, and render the HTML file.

const initManager = () => {
    // formatting from https://www.npmjs.com/package/inquirer
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                message: "What is the team's manager name?",
                name: 'managername',
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log('Please provide a name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the employee ID number?",
                name: 'managerid',
                validate: managerId => {
                    if (managerId) {
                        return true;
                    } else {
                        console.log('Please provide a ID number');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the team's manager email?",
                name: 'manageremail',
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    } else {
                        console.log('Please provide a emial address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the office number?",
                name: 'officenumber',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please provide a valid phone number');
                        return false;
                    }
                }
            },
        ])
        .then(answers)
}

const initEngineer = () => {
    // formatting from https://www.npmjs.com/package/inquirer
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'engineername',
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log('Please provide a name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the engineer ID number?",
                name: 'engineerid',
                validate: engineerId => {
                    if (engineerId) {
                        return true;
                    } else {
                        console.log('Please provide a ID number');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'engineeremail',
                validate: engineerEmail => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log('Please provide a email address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the Github username?",
                name: 'github',
                validate: githubUsername => {
                    if (githubUsername) {
                        return true;
                    } else {
                        console.log('Please provide a Github username');
                        return false;
                    }
                }
            },
        ])
        .then(answers)
}
