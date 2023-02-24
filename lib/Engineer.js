// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

// engineer class extends employee constructor 
class Engineer extends Employee{
    constructor(name, id, email, github){
        // super accesses properties from the method that is being extended
       super(name, id, email)
    //    assign github as it is new to this method
        this.github = github;
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;

