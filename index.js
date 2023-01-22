import inquirer from 'inquirer';
import fs from 'fs';


const managerQuestions = [
    {
        type: 'input',
        name: 'teamManager',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'managerEmployeeID',
        message: "What is the team manager's employee ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the team manager's office number?",
    },
    {
        type: 'rawlist',
        name: 'employeeChoice',
        message: "Which of the following employees are you adding to the team:",
        choices: ["Engineer", "Intern", "Team is complete"]
    }
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's github?",
    },
    {
        type: 'rawlist',
        name: 'employeeChoice',
        message: "Which of the following employees are you adding to the team:",
        choices: ["Engineer", "Intern", "Team is complete"]
    }
]
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'internGithub',
        message: "What is the intern's github?",
    },
    {
        type: 'rawlist',
        name: 'employeeChoice',
        message: "Which of the following employees are you adding to the team:",
        choices: ["Engineer", "Intern", "Team is complete"]
    }
]
inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers)
    if (answers.employeeChoice === "Engineer") {
        inquirer.prompt(engineerQuestions).then((answers) => {
            console.log(answers)
        }
        )
    }
    else if (answers.employeeChoice === "Intern") {
        inquirer.prompt(internQuestions).then((answers) => {
            console.log(answers)
        })
    }
});

//   inquirer.prompt(engineerQuestions).then((answers) => {
//     console.log(answers)
//   });
;