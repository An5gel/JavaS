//INHERITANCE
//A process where one class acquires properties(methods and fields)from another class
//parent class--Child class
//super class-- sub class
//Base class -- derived class
//EXAMPLE
//PARENT CLASS
class Car{
    setName(carName){
        this.carName = carName;
    }
    getName(){
        //return this.carName;
        console.log("This car name is ", this.carName)
    }
    startEngine(){
        console.log("starting the engine for this "+this.carName)
    }
    stopEngine(){
        console.log("stoping the engine for this "+this.carName)  
    }
}
//child class
class Toyota extends Car{
    topSpeed(speed){
        console.log("top speed for " + this.carName + " is " + speed)
    }
}
let myCar = new Toyota()
myCar.setName("Beamer")
myCar.getName()
myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed("200km/hr")