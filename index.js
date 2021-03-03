// const required
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// employees array
const employees = [];

//start webpage
function initIndex() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Name"
        name: "name"
    },
    {
        type: "list",
        messgae: "Role",
        choices: [
            "Intern",
            "Engineer",
            "Manager"
        ],
        
        name: "role"
    },
    {
        message: "Id number",
        name: "id"
    },
    {
        message: "Email",
        name: "email"
    }
])
}