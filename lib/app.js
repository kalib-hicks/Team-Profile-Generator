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

    // prompt user
  continue() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select one of the options",
          choices: [
            "Add an Engineer",
            "Add an Intern",
            "Finished building my team",
          ],
        },
      ])
      .then(({ action }) => {
        this.action = action;
        if (this.action === "Add an Engineer") {
          console.log("You chose to add an engineer");
          inquirer
            .prompt([
              {
                type: "text",
                name: "name",
                message: "Please enter the engineer name",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter engineer name!");
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
                name: "gitHub",
                message: "Please enter enigineer gitHub username",
                validate: (gitHubInput) => {
                  if (gitHubInput) {
                    return true;
                  } else {
                    console.log("Please enter engineer GitHub username!");
                    return false;
                  }
                },
              },
            ])
            .then(({ name, id, email, gitHub }) => {
              this.data.push(new Engineer(name, id, email, gitHub));
              this.continue();
              //console.log(this.data);
            });
        }
        if (this.action === "Add an Intern") {
          console.log("You chose to add an Intern");
          inquirer
            .prompt([
              {
                type: "text",
                name: "name",
                message: "Please enter the interns name",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter interns name!");
                    return false;
                  }
                },
              },
              {
                type: "text",
                name: "id",
                message: "Please enter intern ID",
                validate: (idInput) => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log("Please enter intern ID!");
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
                name: "school",
                message: "Please enter school",
                validate: (schoolInput) => {
                  if (schoolInput) {
                    return true;
                  } else {
                    console.log("Please enter a school!");
                    return false;
                  }
                },
              },
            ])
            .then(({ name, id, email, school }) => {
              this.data.push(new Intern(name, id, email, school));
              this.continue();
              //console.log(this.data);
            });
        }
        if (this.action === "Finished building my team") {
          const createTeam = (data) => {
            //console.log(data)
            let myPromise = new Promise(function (myResolve, myReject) {
              // "Producing Code" (May take some time)
              myResolve(new GeneratePage(data).createPage()); // when successful
              myReject("Error"); // when error
            });
            // "Consuming Code" (Must wait for a fulfilled Promise)
            myPromise
              .then((pageHTML) => {
                return writeFile(pageHTML);
              })
              .then((writeFileResponse) => {
                console.log(writeFileResponse);
                return copyFile();
              })
              .then((copyFileResponse) => {
                console.log(copyFileResponse);
              })
              .catch((err) => {
                console.log(err);
              });
          };
          createTeam(this.data);
        }
      });
  }
}

module.exports = App;