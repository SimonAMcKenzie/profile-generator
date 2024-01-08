const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Prompt functions for managers, engineers and interns
Function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your manager id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your work email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
        },
    ]);
}

Function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter work email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter GitHub username:',
        },
    ]);
}

Function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter work email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter name of school:',
        },
    ]);
}


