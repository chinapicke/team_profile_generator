// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
// gets the name of the employee
    getName(){
        return this.name;
    }
// gets the ID of the employee
    getId(){
        return this.id;
    }
// gets the email of the employee
    getEmail(){
        return this.email;
    }
// returns the employee object
    getRole(){
        return "Employee";
    }
}

// exports employee methods
module.exports = Employee;