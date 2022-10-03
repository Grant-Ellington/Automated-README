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
const licInfo = {
    MIT:['https://img.shields.io/badge/License-MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
    GNU: ['License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://www.gnu.org/licenses/gpl-3.0'],
    none: ['','']

}

switch(license) {
    case 'MIT Liscense':
        var img = licInfo.MIT[0]
        var link = licInfo.MIT[1]
        break;
    case 'GNU GPLv3':
        var img = licInfo.GNU[0]
        var link = licInfo.GNU[0]
        break;
    case '':
        var img = ''
        var link = ''
        break;
}

// TODO: Create a function to write README file
const writeToFile = ({name, title, synopsis, tech1, tech2, tech3, installation, usage,contGuide, test, license, img, link}) =>
    `## Table of Contents
    * *[License](*License)
    * [${title}](*${title})
    * [Description](*Description)
    * [Installation](*Installation)
    * [Usage Information](*Usage Information)
    * [Contribution Guidelines](*Contribution Guidlines)
    * [Test](*Test)
    * [Technologies](*Technologies)
  
    ##License

    [![License: ${license}](${img})](${link})
    

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

        

        fs.writeFile('README.md', readMeCont, (err)=> 
        err ? console.log('err') : console.log('success'))
    })
}


// Function call to initialize app
init();
