// required internal and external packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//questions array for inquirer including some validation for required input that should be included in every readme
const questions = [
  {
    type: "input",
    message: "Please enter your Github username (required)",
    name: "github",
    validate: (githubText) => {
      if (githubText) {
        return true;
      } else {
        console.log("A github username is required");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },
  {
    type: "input",
    name: "title",
    message: "Please enter your project's title (required)",
    validate: (titleText) => {
      if (titleText) {
        return true;
      } else {
        console.log("You need a title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project (required)",
    validate: (descText) => {
      if (descText) {
        return true;
      } else {
        console.log("You need a description");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter any relevant installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how to use your application",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 2.0",
      "MPL 2.0",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "None",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can someone contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please enter instructions on how to test your application if relevant",
  },
];

//write to file function creates a file from a filename and data parameters, will log error to file if an error occurs, else will write the data to the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, data) => {
        return err ? err : data;
    });
}

// init function runs inquirer, then creates a promise object from the user input, then writes the readme file, then console logs completion
function init() {
    inquirer.prompt(questions)
    .then ((data) =>

    {
        const readme = generateMarkdown(data);
        writeToFile("readme.md", readme);
        console.log("Your readme has been generated!");
})
}

// Function call to initialize app
init();
