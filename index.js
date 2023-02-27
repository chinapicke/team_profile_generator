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
        .prompt([
            /* Pass your questions in here */
            {
                type: 'list',
                message: 'Select your next option?',
                name: 'next',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
            }
        ])
        .then(function (input) {
    // switch idea from https://stackoverflow.com/questions/74075310/how-to-properly-nest-inquirer-prompts
    // the input selected by the user will run the certain function and therefore the questions specific to that function
    switch (input.next) {
        case 'Add an engineer':
            initEngineer()
            break;
        case 'Add an intern':
            initIntern()
            break;
        default:
            // aka when finish building the team is selected then it creates and writes the input onto the team.file
            writePage()
            break;
    }
        })
};

// created function to render manager questions
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
            // makes a new manager variable using manager constructor with the answers from the questions
            const manager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.officenumber);
            // pushes manager to the team
            team.push(manager);
            // console.log to check it is showing the users answers to the questions
            // console.log(manager);
            // console.log(furtherQuestions)
            // calls the function that renders the next questions that the user needs to select from 
            furtherQuestions()
        })
};

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
            // makes a new engineer variable using engineer constructor with the answers from the questions
            const engineer = new Engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.github)
            // pushes engineer to the team
            team.push(engineer);
            furtherQuestions()
        })
};


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
            const intern = new Intern(answers.internname, answers.internid, answers.internemail, answers.school);
            team.push(intern);
            furtherQuestions()
        })
};


// Write the file using the provided page template  
// Used the same template to write file and condition as I used in the last challenge
function writePage() {
    // writes the file to the path provided to output, renders the team array which was pushed into by the other functions
    fs.writeFile(outputPath, render(team), (err) => {
        // if error is true console error, if false console log success
        err ? console.log(err) : console.log('You have successfully made your team')
    })
}

// initials initManager only as the questions after this function is decided by the users input
// if all functions were called then the questions would all be running at the same time, which is not what we want
initManager()





