// TODO: Include packages needed for this application
import inquirer from "inquirer";
import {writeFile} from 'fs/promises';
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
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
            choices: ['MIT', 'apache commons', 'BSD liscense', 'unlicense', 'None of the Above'],
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
    projectTitle,
    description,
    installation,
    usage,
    contribution,
    testInstructions,
    license,
    username,
    contact
}) =>
    ` 

`



// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFile('README.md', writeToFile(answers)))
        .then(() => console.log('Successfully generated README.'))
        .catch((err) => console.log(err));
};



// Function call to initialize app
init();
