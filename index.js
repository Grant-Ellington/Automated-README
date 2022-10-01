// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// // TODO: Create an array of questions for user input
// const questions = ['What is your name?',
//                     'What is your project title?',
//                     'Eneter a short subnopsis of you projecct?',
//                     'What techonologyis one rechnology that you used?',

//                     'What is another technology you used?',
//                     'What is another technology you used?'
//                     ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() {}

inquirer
.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    },
    {
    type: 'input',
    name: 'location',
    message: 'Where are you from?',
    },
    {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
    },
    {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
    },
    {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
    },
])

// Function call to initialize app
init();
