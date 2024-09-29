// TODO: Include packages needed for this application
import inquirer from "inquirer";
import {writeFile} from 'fs/promises';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe this project to someone?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How would someone install this code?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project used?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What contribution guilelines would you like to have?'
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'How should the code be tested for use?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which liscence would you like to use for your project?',
            choices: ['MIT', 'apache', 'GNU', 'unilicense', 'None of the Above'],
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is your emailaddress?',
        },
    ]);
};

// TODO: Create a function to write README file
const writeToFile = ({
    title,
    description,
    installation,
    usage,
    contribution,
    testInstructions,
    license,
    username,
    contact
}) =>
    ` ${generateMarkdown(title, license)}
## Description
${description}

## Installation
${installation}


npm install


## Usage
${usage}

You can use the following command in the console.

npm start

The newly created README will appear within the "Generated" folder.


## Contribution Guidelines
${contribution}

## Test Instructions
${testInstructions}

## Questions
Who am I?
My profile: [${username}](github.com/${username})

How to contact me?
Email: ${contact}
If there are any errors, updates, or further questions for this project, please
email me and set the subject line as "Generator2.21".

#### Table of Contents

- [Description](#Description)

- [Installation](#Installation)

- [Usage](#Usage)

- [Contribution Guidelines](#Contribution-Guidelines)

- [Test Instructions](#Test-Instructions)

- [Questions](#Questions)

`



// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFile('./Generated/README.md', writeToFile(answers)))
        .then(() => console.log('Successfully generated README.'))
        .catch((err) => console.log(err));
};



// Function call to initialize app
init();
