// A class is a blueprint of an object.
// NB.A class will always have its name in singular
//THIS  ;this keyword refers to the object of the class

// Syntax of a class
class Classname{
    statements
}
//Examples
class Employee{
    //a class has ac onstractor which is called 
    //whenever a class is instantiated or an object of the class
    //is created
    constructor(name,id,gender,age,color,education){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.color = color;
        this.education = education;
    }
}
//an object is an infant of a class

//creating objects of the employee class
let emp1 = new Employee("Angel","GBTOO1","Female",23,"Black","LLB")
let emp2 = new Employee("Desmon","SPRINT001","Male",35,"Black","BIT")
console.log(emp1)
console.log(emp2)
console.log(emp1.name)
console.log(emp2["age"])

class Car{
    constructor(carName,manufacturer,speed,color){
        this.carName = carName;
         this.manufacturer = manufacturer;
        this.speed = speed;
        this.color = color;
    }
}
let car1 = new Car("vitz","toyota","100km/hr","white")
let car2 = new Car("premo","toyota","150km/hr","navy blue")
console.log(car1)
console.log(car2)
// Ass.3
// create 10 different classes with 5objects
//  out of each class.
// use the dot notation and bracket notation to 
// print atleast 2 properties for each object

