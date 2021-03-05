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
function initApp() {
     
      addMember();
};

function addMember() {
    inquirer.prompt([{
        message: "Name",
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
        startHtml();
    });


// initiate html


  function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" "./dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container">
        <div class="row">`;
fs.writeFile("./team.html", html, function(err) {
    if (err) {
        console.log(err);
    }

});

}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        //const phone = member.getPhone();
       // const school = member.getSchool();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } //else if (role === "Intern") {
           // const school = member.getSchool();
           // data = `<div class="col-6">
            //<div class="card mx-auto mb-3" style="width: 18rem">
            //<h5 class="card-header">${name}<br /><br />Intern</h5>
            //<ul class="list-group list-group-flush">
            //    <li class="list-group-item">ID: ${id}</li>
            //    <li class="list-group-item">Email Address: ${email}</li>
             //   <li class="list-group-item">School: ${school}</li>
           // </ul>
          //  </div>
       // </div>`;
        //} else {
          //  const phone = member.getPhone();
          //  data = `<div class="col-6">
           // <div class="card mx-auto mb-3" style="width: 18rem">
           // <h5 class="card-header">${name}<br /><br />Manager</h5>
           // <ul class="list-group list-group-flush">
            //    <li class="list-group-item">ID: ${id}</li>
            //    <li class="list-group-item">Email Address: ${email}</li>
             //   <li class="list-group-item">Office Phone: ${phone}</li>
         //   </ul>
          //  </div>
        //</div>`
        //}
        console.log("adding team member");
        fs.appendFile("./team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}
}
initApp();