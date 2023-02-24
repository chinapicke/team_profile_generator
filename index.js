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

