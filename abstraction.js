//example
// no abstraction implemented
function Employee1(EmpName,age,BaseSalary){
    this.EmpName = EmpName;
    this.age = age;
    this.BaseSalary = BaseSalary;
    this.monthlyBonus = 1000

    //this method is exposed as aproperty
    this.calculateFinalSalary = function(){
        let finalSalary = this.BaseSalary+this.monthlyBonus
        console.log ("Final salary is: " +finalSalary)
    }
    this.getEmpDetails = function(){
        console.log("Name:  " + this.EmpName  + " Age:  " +this.age)
    }
}
let emp1 = new Employee1("Clinton", 20 ,344)
emp1.getEmpDetails()
emp1.calculateFinalSalary()

// example 2
//abstraction implemented
function Employee2(EmpName, age, BaseSalary){
    this.EmpName = EmpName;
    this.age = age;
    this.BaseSalary = BaseSalary;
    //hidden/private varaible
     monthlyBonus = 1000;

    //this method ishidden or abstracted
     this.calculateFinalSalary = function(){
        let finalSalary = BaseSalary+ monthlyBonus
        console.log ("Final salary is: " +finalSalary)
    }
    // another private method
    let calculateEmpService = function(){
        let startYear = 1990
        let yearNow = 2023
        let yearsWorked = yearNow - startYear
        if(yearsWorked>30){
            console.log("this employee is retired")

        }else if(yearsWorked ===30){
            console.log("this employee is due retirement")

        }
        else{
            console.log("this employee is still in service")
        }
    }
    this.getEmpDetails = function(){
        console.log("Name:  " + this.EmpName  + " Age:  " +this.age)
        calculateEmpService()
        calculateFinalSalary()
    }
}
let emp2  = new Employee2("Clinton", 20 ,344)
emp2.getEmpDetails()

