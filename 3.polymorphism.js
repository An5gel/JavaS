//POLYMORPHISM
//Poly means many
//morph means forms
//polymorhism in oop is the ability to create a variable or a function that has 
//more than one form
//this is the oop which provides the facility to perform one task in many ways
//EXAMPLE
class Animal{
    constructor(animalName){
        this.animalName = animalName;
    }
    //this method or function is polymorphic because it also exists in the child class
    //alligator
    eats(){
        console.log(this.animalName + " eats meat ");
    }
    walks(){
        console.log(this.animalName + " crawls")
    }
}
class Alligator extends Animal{
    eats(){
        super.eats();
            console.log(this.animalName + " eats fish ");
    }
    walks(){
        console.log(this.animalName + " hopes")
    }
}
let wimp = new Animal("hail")
wimp.walks()
wimp.eats()
let tool = new Alligator("Kamiat")
tool.eats()
tool.walks()