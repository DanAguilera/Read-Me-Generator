const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./markdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be run to install your dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What does the user need to know about your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about using your repo?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What command should be run or start testing?",
        name: "tests"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "None"
        ]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// function call to initialize program
init();
