const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, github){
     this.name = name;
     this.id = id;
     this.email = email;
     this.github = github;
     this.title = "Manager"
    }

    getRole() {
        return "Manager";
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


module.exports = Manager;