const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, github){
     this.name = name;
     this.id = id;
     this.email = email;
     this.github = github;
     this.title = "Intern"
    }

    getRole() {
        return "Intern";
    }

    getGithub() {
        return this.github;
    }

    getName(){
        return this.name; 
    }

    getId(){
        return this.id; 
    }

    getEmail(){
        return this.email; 
    }
}


module.exports = Intern;