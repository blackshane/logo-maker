const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
    type: 'input',
    message: 'Enter characters (up to 3)',
    name: 'text',
    },
    {
    type: 'input',
    message: 'Enter color keyword',
    name: 'color',
    },
    {
    type: 'list',
    message: '',
    name: 'shape',
    choices: [
        'Circle',
        'Triangle',
        'Square',
        ]
    },

];
inquirer
    .prompt(questions)
    .then((data) => {
        fs.writeFile('/examples.svg', data, (err) => { 
            err ? console.error(err) : console.log('Commit logged!')
            });      
        });       
    


    