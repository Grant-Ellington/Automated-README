// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//function to create badge based on answers.
function getbadge(badge) {
    if(badge === 'MIT'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (badge === 'GNU GLPv3'){
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else {
        return ""
    }
}
// Question Aray
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
    {
        type: 'input',
        name: 'gitUser',
        message: 'What are your GitHub user name?'  

    },
    {
        type: 'input',
        name: 'email',
        message: 'What are your email address?'  

    },
];

const generateMarkdown = ({name, title, synopsis, tech1, tech2, tech3, installation, usage, contGuide, test, license, getbadge, gitUser, email})=>
    `## Table of Contents
    * *[License](*License)
    * [Title](*Title)
    * [Description](*Description)
    * [Installation](*Installation)
    * [Usage Information](*Usage Information)
    * [Contribution Guidelines](*Contribution Guidlines)
    * [Test](*Test)
    * [Technologies](*Technologies)
    * [Questions](*Questions)
  
    ##License
    
    ${license}
    ${getbadge}

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

    
    ## Questions
    ${gitUser}
    [${email}](${email})`


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const badge = answers.license
            console.log(badge)
            answers.getbadge = getbadge(badge)
            console.log(getbadge(badge))
            const READMEPage = generateMarkdown(answers)
            fs.writeFile('README.md', READMEPage, (err) =>
            err ? console.log(err) :console.log('success'))
        })

        
}


// Function call to initialize app
init();
