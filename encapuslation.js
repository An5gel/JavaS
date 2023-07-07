//ENCAPUSLATION
//a mechanism to restrict
//A mechanism of bundling data with methods thst operste onthat data
//thre are two ways
//1. making data members private using var /let keyword
//2. set the data using setter methods and get the data using getter method
// we can maageread and writeacess of object properties using encapsulation
// read only access;getter methods only
//write only access;setter methods only
//read and write access;both getter and setter

//why encapuslation
//1. security controlled acccess guards an object against illegal access
//2.hides implementation and exposes behaviour
//3.loose couplig- modify the impelementaion every time
//4.make the application more flexible and manageable
//5.simplify the application

//example
class Worker{
    constuctor(){
        //These are ecapuslated
        let workName;
        let rating;
        let workerNumber;
    }
    //getter method
    getWorkName(){
        return this.workName;
    }
    //setter method
    setWorkName(workName){
        this.workName = workName
    }
    //getter method
    getRating(){
        return this.rating;
    }
    //setter method
    setRating(rating){
        this.rating = rating
    }
    //getter method
    getworkerNumber(){
        return this.workerNumber;
    }
    //setter method
    setworkerNumber(workerNumber){
        this.workerNumber = workerNumber
    }
}
let worker = new Worker();
worker.setWorkName("Angel")
worker.setRating(1)
worker.setworkerNumber(543)
console.log(worker)
console.log(worker.getWorkName() , worker.getRating() , worker.getworkerNumber())
console.log(worker.getworkerNumber())

//example
class Employee{
    setEmpDetails(empName ,id,phoneNumber){
        this.empName = empName;
        this.id =id;
        this.phoneNumber = phoneNumber;

    }
    setempName(empName){
        this.empName = empName;
    }
    getempName(){
        return this.empName
    }
    setid(id){
        this.id = id;
    }
    getid(){
        return this.id
    }
    setphoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber
    }
    getphoneNumber(){
        return this.phoneNumber
    }
}
let emp = new Employee();
emp.setempName("JOANA")
emp.setid("CCD001")
emp.setphoneNumber(757850603)
console.log(emp)
console.log(emp.getempName())
console.log(emp.getempName() , emp.getid() , emp.getphoneNumber())
