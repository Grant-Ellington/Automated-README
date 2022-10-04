// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//markdown js file import
//const generateMarkdown = require('./utils/generateMarkdown')
//checks the input for valididity of the input of each question
function validateInput(value) {
    if(value !='') {
        return true
    } else {
        return "please enter a  valid input"
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'synopsis',
        message: 'Eneter a short synopsis of you projecct?',
    },
    {
        type: 'input',
        name: 'tech1',
        message: 'What is one technology that you used?',
    },
    {
        type: 'input',
        name: 'tech2',
        message: 'What is another technology you used?',
    },
    {
        type: 'input',
        name: 'tech3',
        message: 'What is another technology you used?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        },
    {
        type: 'input',
        name: 'usage',
        message:'What are your Usage Insrunctions?',
        },
    {
        type: 'input',
        name: 'contGuide',
        message: 'Who are your constribution guidleines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test?'  

    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you need?',
        choices: [
            'MIT',
            'GNU GLPv3',
            '',
        ]
    },
];

const generateMarkdown = ({name, title, synopsis, tech1, tech2, tech3, installation, usage, contGuide, test, license})=>
    `## Table of Contents
    * *[License](*License)
    * [Title](*Title)
    * [Description](*Description)
    * [Installation](*Installation)
    * [Usage Information](*Usage Information)
    * [Contribution Guidelines](*Contribution Guidlines)
    * [Test](*Test)
    * [Technologies](*Technologies)
  
    ##License
    
    ${license}

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

// const licInfo = {
//     MIT:['https://img.shields.io/badge/License-MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
//     GNU: ['License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://www.gnu.org/licenses/gpl-3.0'],
//     none: ['','']

// }

// switch(license) {
//     case 'MIT Liscense':
//         var img = licInfo.MIT[0]
//         var link = licInfo.MIT[1]
//         break;
//     case 'GNU GPLv3':
//         var img = licInfo.GNU[0]
//         var link = licInfo.GNU[0]
//         break;
//     case '':
//         var img = ''
//         var link = ''
//         break;
// }

// TODO: Create a function to write README file
// const writeToFile = (answers) => {
//     console.log(answers)
//     fs.writeFile('README.md', generateMarkdown(answers), (err)=> 
//         err ? console.log('err') : console.log('success'))
//}
// function generateMarkdown(name, title, synopsis, tech1, tech2, tech3, installation, usage, contGuide, test, license){
//     `## Table of Contents
//     * *[License](*License)
//     * [Title](*Title)
//     * [Description](*Description)
//     * [Installation](*Installation)
//     * [Usage Information](*Usage Information)
//     * [Contribution Guidelines](*Contribution Guidlines)
//     * [Test](*Test)
//     * [Technologies](*Technologies)
  
//     ##License
    

//     #${title} 
//     ###${name}
//     ## Description
    
//     ${synopsis}

//     ##Installation

//     ${installation}

//     ##Usage Information

//     ${usage}

//     ##Contribution Guidlines

//     ${contGuide}

//     ##Test

//     ${test}

    
//     ## Techonologies
//     Project is created with:
//     * ${tech1}
//     * ${tech2}
//     * ${tech3}
//     ## Set-up

    
//     ## What was accomplished`
// }
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const READMEPage = generateMarkdown(answers)
            fs.writeFile('README.md', READMEPage, (err) =>
            err ? console.log(err) :console.log('success'))
        })

        
}


// Function call to initialize app
init();
