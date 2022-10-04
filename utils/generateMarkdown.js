

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// function renderLicenseBadge(data) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(data) {}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(data) {}


// TODO: Create a function to generate markdown for README
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

module.exports = generateMarkdown;
