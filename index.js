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
]

const employeeChoiceQuestion = [
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
        name: 'internSchoot',
        message: "What school is the intern from?",
    },
]


inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers)
    const fd = fs.openSync("team-roster-output/index.html", "w");
    createBasicHTML(fd)
    createManagerCard(fd, answers)
    employeeChoice()
        .then(() => {
            closeBasicHTML(fd)
            console.log("butts")
            fs.closeSync(fd)
        })
});



function closeBasicHTML(fd) {
    fs.writeSync(fd, '</body></html>')
}

function createBasicHTML(fd) {
    fs.writeSync(fd, '<html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1 class = "banner">My Team</h1> ')
}
function createManagerName(fd, teamManager) {
    fs, writeSync(fd, "")
}

function employeeChoice() {
    return inquirer.prompt(employeeChoiceQuestion).then((answers) => {
        console.log(answers)
        if (answers.employeeChoice === "Engineer") {
            inquirer.prompt(engineerQuestions).then(async (answers) => {
                console.log(answers)
               employeeChoice()
            }
            )
        }
        else if (answers.employeeChoice === "Intern") {
            inquirer.prompt(internQuestions).then(async (answers) => {
                console.log(answers)
               employeeChoice()
            })

        }
    })
}
function createManagerCard(fd, answers){

fs.writeSync(fd, `<ul class = "managerCard"><li>${answers.teamManager}`)
}