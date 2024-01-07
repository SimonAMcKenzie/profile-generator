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
// This functions prompts manager for profile information
Function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the manager\'s name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager\'s id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the manager\'s email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the manager\'s office number:',
        },
    ]);
}