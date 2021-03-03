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

.then(function({name, role, email, id}) {
    let roleInfo = "";
    if (role === "Engineer") {
        roleInfo = "GitHub username";
    } else if (role === "Intern") {
        roleInfo = "school";
    } else {
        roleInfo ="office number";
    }
    inquirer.prompt([{
        message: `Employee ${roleInfo}`,
        name: "roleInfo"
    },
    {
        type: "list",
        message: "Add more employees?",
        choices: [
            "yes",
            "no"
        ],
        name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}