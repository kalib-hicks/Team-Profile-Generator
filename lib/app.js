const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const GeneratePage = require("../src/page-template");
const { writeFile, copyFile } = require("../utils/generate-site");

class App {
    constructor() {
      this.data = [];
    }
    initializeApp() {
      inquirer
        .prompt([
          {
            type: "text",
            name: "name",
            message: "Please enter the team managers name",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter team managers name!");
                return false;
              }
            },
          },
          {
            type: "text",
            name: "id",
            message: "Please enter employee ID",
            validate: (idInput) => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter employee ID!");
                return false;
              }
            },
          },
          {
            type: "text",
            name: "email",
            message: "Please enter email address",
            validate: (emailInput) => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter an email!");
                return false;
              }
            },
          },
          {
            type: "text",
            name: "office",
            message: "Please enter managers office number",
            validate: (officeInput) => {
              if (officeInput) {
                return true;
              } else {
                console.log("Please enter managers office number!");
                return false;
              }
            },
          },
        ])
        .then(({ name, id, email, office }) => {
          this.data.push(new Manager(name, id, email, office));
          this.continue();
          //console.log(this.data);
        });
    }