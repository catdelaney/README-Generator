// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description for your project:',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How should people contribute to your project?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide test information:',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Select a license for your application',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'E-mail',
        message: 'Enter your E-Mail address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('An error has occured', err);
        } else {
            console.log('README.md has been generated.')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeMD = generateMarkdown (answers);
        writeToFile('README.md', readMeMD);
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
