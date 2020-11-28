
//Same as Classes
// function Employee(salary){
//     this.salary =this.salary
// }


class Employee {
    constructor(name, salary, dept) {
        this.name = name
        this.salary = salary
        this.dept = dept
    }

    increasedSalary() {
        return this.salary+10000
    }
    //Static methods
    static employeeAddress(){
        return "Pune"
    }
}

// anil = new Employee("Anil", 100000, "SE")
// console.log(anil.increasedSalary())
// console.log(Employee.employeeAddress())

//Inheritance
class PuneOffice extends Employee{
    increasedSalary() {
        return "I am from Pune office and my salary is increased"
    }
}

Gaurav = new PuneOffice("Gaurav",1000000, "SE")
console.log(Gaurav.increasedSalary()) // Polymorphism