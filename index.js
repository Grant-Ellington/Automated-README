// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your name?',
                    'What is your project title?',
                    'Eneter a short synoqsis of you projecct?',
                    'What is one technology that you used?',
                    'What is another technology you used?',
                    'What is another technology you used?',
                    'How do you install your project?',
                    'What are your Usage Insrunctions?',
                    'Who are your constribution guidleines?',
                    'What are your test?',
                    'What license do you need?',
                    ];

// TODO: Create a function to write README file
const writeToFile = ({name, title, synopsis, tech1, tech2, tech3, installation, usage,contGuide, test, license}) =>
    `## Table of Contents
    * [${title}](*${title})
    * [Description](*Description)
    * [Installation](*Installation)
    * [Usage Information](*Usage Information)
    * [Contribution Guidelines](*Contribution Guidlines)
    * *[License](*License)
    * [Test](*Test)
    * [Technologies](*Technologies)
    
    #${title} 
    ###${name}
    ## Description
    
    ${synopsis}

    ##Installation

    ${installation}

    ##Usage Information

    ${usage}

    ##Contribution Guidlines

    ${contGuide}

    ##Test

    ${test}

    ##License

    ${license}
    
    ## Techonologies
    Project is created with:
    * ${tech1}
    * ${tech2}
    * ${tech3}
    ## Set-up

    
    ## What was accomplished`

// TODO: Create a function to initialize app
function init() {
    inquirer
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
            {
            type: 'input',
            name: 'installation',
            message: questions[6],
            },
            {
            type: 'input',
            name: 'usage',
            message: questions[7],
            },
            {
            type: 'input',
            name: 'contGuide',
            message: questions[8],
            },
            {
            type: 'input',
            name: 'test',
            message: questions[9],
            },
            {
            type: 'list',
            name: 'license',
            message: questions[10],
            choices: ['MIT Liscense', 'GNU GPLv3']
            },
    ])
    .then((answers) => {
        const readMeCont = writeToFile(answers);
        const license = answers.license
        exports.license = license

        

        fs.writeFile('README.md', readMeCont, (err)=> 
        err ? console.log('err') : console.log('success'))
    })
}


// Function call to initialize app
init();
