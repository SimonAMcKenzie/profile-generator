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
function promptManager() {
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

function promptEngineer() {
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

function promptIntern() {
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

// Initaite application function
async function init() {
    try {
        const teamMembers = [];

        // Then starts prompting for information, starting with the manager
        const managerInfo = await promptManager();
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        teamMembers.push(manager);

        let addEmployee = true;

        // Continues process to allow other roles to be added
        while (addEmployee) {
            const EmployeeType = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'choose the employee type you want to add:',
                    choices: ['Engineer', 'Intern', 'Finish building the team profiles'],
                },
            ]);

            if (EmployeeType.type === 'Engineer') {
                const engineerInfo = await promptEngineer();
                const engineer = New Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github); 
                teamMembers.push(engineer);
            }   else if (EmployeeType,type === 'Intern') {
                const internInfo = await promptIntern();
                const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                teamMembers.push(intern);
            }   else {
                addEmployee = false;
            }
        }

        // Then generates html and writes it to the file
        const html = render(teamMembers);
        fs.writeFileSync(outputPath, html);

        console.log(`Team HTML generated successfully at ${outputPath}`);
    }   catch (err) {
        console.error('An error occurred:', err);
    }
}

// This starts the application
init();
