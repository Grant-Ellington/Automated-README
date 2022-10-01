// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your name?',
                    'What is your project title?',
                    'Eneter a short synoqsis of you projecct?',
                    'What is one technology that you used?',
                    'What is another technology you used?',
                    'What is another technology you used?'
                    ];

// TODO: Create a function to write README file
const writeToFile = ({name, title, synopsis, tech1, tech2, tech3}) =>
    `## Table of Contents
    * [${title}](*${title})
    * [Introduction](*Introduction)
    * [Technologies](*Technologies)
    * [Set-up](*Set-up)
    * [What-was-accomplished](*What-was-accomplished)
    
    #${title} 
    ###${name}
    ## Introduction
    
    ${synopsis}
    
    ## Techonologies
    Project is created with:
    * ${tech1}
    * ${tech2}
    * ${tech3}
    ## Set-up

    
    ## What was accomplished
    * Using bootrap- created a css front end with flexiblen design.
    * I continously up-dating clock.
    * A calendar which udates background color based on time of loading
    * A claendar spots which incorporates local storage to store important events.`

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: questions[0],
        },
        {
        type: 'input',
        name: 'title',
        message: questions[1],
        },
        {
        type: 'input',
        name: 'synopsis',
        message: questions[2],
        },
        {
        type: 'input',
        name: 'tech1',
        message: questions[3],
        },
        {
        type: 'input',
        name: 'tech2',
        message: questions[4],
        },
        {
        type: 'input',
        name: 'tech5',
        message: questions[5],
        },
    ])
    .then((answers) => {
        const readMeCont = writeToFile(answers);

        fs.writeFile('README.md', readMeCont, (err)=> 
        err ? console.log('err') : console.log('success'))
    })
}


// Function call to initialize app
init();
