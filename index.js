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
const furtherQuestions = () => {
    inquirer
        .prompt(
            // List option for the user to select
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'next',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
            }
        )
        .then(input)
}
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
        .then(answers => {
            const manager = new Manager(manager.managername, manager.managerid, manager.manageremail, manager.officeNumber)
            team.push(manager)
            furtherQuestions()
        })
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
        .then(answers => {
            // creates a new engineer object with the answers from the user
            const engineer = new Engineer(engineer.engineername, engineer.engineerid, engineer.email, engineer.github)
            // push the new object into the team array so that it can be shown on the html page
            team.push(engineer)
            // furtherQuestion function to display the questions to direct user to the thing that they picked to make the team
            furtherQuestions();
        })
}

const initIntern = () => {
    // formatting from https://www.npmjs.com/package/inquirer
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internname',
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        console.log('Please provide a name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the intern's ID number?",
                name: 'internid',
                validate: internId => {
                    if (internId) {
                        return true;
                    } else {
                        console.log('Please provide a ID number');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'internemail',
                validate: internEmail => {
                    if (internEmail) {
                        return true;
                    } else {
                        console.log('Please provide a email address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the name of the intern's school?",
                name: 'school',
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log("Please provide a school's name");
                        return false;
                    }
                }
            },
        ])
        .then(answers => {
            const intern = new Intern(intern.internname, intern.internid, intern.internemail, intern.school)
            team.push(intern)
            furtherQuestions()
        })
}

// Write the file using the provided page template  
// Used same err if/else statement as in my previous challenge 
function writePage() {
    fs.writeFile(outputPath, render(team), (err) => {
        // if error is true console error, if false console log success
        err ? console.log(err) : console.log('You have successfully made your team')
    })
}


