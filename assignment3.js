// Ass.3
//1. create 10 different classes with 5objects
//  out of each class.
//2. use the dot notation and bracket notation to 
// print atleast 2 properties for each object

//1. 
class Company{
    constructor(companyName,position,yearStarted,product,city){
        this.companyName = companyName;
         this.position = position;
        this.yearStarted = yearStarted;
        this.product = product;
        this.city = city;
    }
}
let comp1 = new Company("Mukwano","5th","1990","utilities","kampala")
let comp2 = new Company("Airtel","2nd","1995","network","global")
console.log(comp1)
console.log(comp2)
console.log(comp1.companyName)
console.log(comp2["city"])

// 2.
class School{
    constructor(schoolName,studentTotal,city,openingYear,founder){
        this.schoolName = schoolName;
         this.studentTotal = studentTotal;
        this.city = city;
        this.openingYear = openingYear;
        this.founder = founder;
    }
}
let sch1 = new School("Light schools",3000,"bulenga",1992,"Joseph MK")
let sch2 = new School("Genesis N/p school",550,"Mutungo",2003,"Jenipher W")
console.log(sch1)
console.log(sch2)
console.log(sch1.studentTotal)
console.log(sch2["founder"])

//3.
class Model{
    constructor(firstName,age,figure,skinColor,height){
        this.firstName = firstName;
         this.age = age;
        this.figure = figure;
        this.skinColor = skinColor;
        this.height = height;
    }
}
let mod1 = new Model("Vannessa",21,8,"chocolate","4.67ft")
let mod2 = new Model("Julian",20,6,"fairbrown","5ft")
console.log(mod1)
console.log(mod2)
console.log(mod1.figure)
console.log(mod2["skinColor"])

//4.
class Scholar{
    constructor(scholarsName,classTaken,idNumber,room,homeDistrict){
        this.scholarsName = scholarsName;
         this.classTaken = classTaken;
        this.idNumber = idNumber;
        this.room = room;
        this.homeDistrict = homeDistrict;
    }
}
let scholar1 = new Scholar("Monica","Javascript","GBT006",3,"Mukono")
let scholar2 = new Scholar("Patience","Python","GBT012",2,"Kanungu")
console.log(scholar1)
console.log(scholar2)
console.log(scholar1.classTaken)
console.log(scholar2["idNumber"])

// 5.
class Children{
    constructor(childName,age,birthPosition,mother,father){
        this.childName = childName;
         this.age = age;
        this.birthPosition = birthPosition;
        this.mother = mother;
        this.father = father;
    }
}
let child1 = new Children("Diego",15,"second","Eva","John")
let child2 = new Children("Premier",11,"third","Eva","John")
console.log(child1)
console.log(child2)
console.log(child1.mother)
console.log(child2["father"])

//6.
class Friend{
    constructor(lastName,tribe,city,weight,character){
        this.lastName =lastName;
         this.tribe = tribe;
        this.city = city;
        this.weight = weight;
        this.character = character;
    }
}
let friend1 = new Friend("Mirembe","chapadhola","Nansana","76KG","Jolly")
let friend2 = new Friend("Ahumuza","mukiga","Mutungo","52KG","understanding")
console.log(friend1)
console.log(friend2)
console.log(friend1.tribe)
console.log(friend2["weight"])

//7.
class Drink{
    constructor(wine,whiskey,softDrink,natural,beer){
        this.wine = wine;
         this.whiskey = whiskey;
        this.softDrink = softDrink;
        this.natural = natural;
        this.beer = beer;
    }
}
let tasha = new Drink("Carbernet surv","Aberlour 12","water","mango juice","Tuskerlite")
let mellon = new Drink("Chardony","Jameson","soda","mint and pineapple","tuskermalt")
console.log(tasha)
console.log(mellon)
console.log(tasha.whiskey)
console.log(mellon["beer"])

//8.
class People{
    constructor(elderly,men,women,disabled){
        this.elderly = elderly;
         this.men = men;
        this.women = women;
        this.disabled = disabled;
    }
}
let group1 = new People("Jaja","John","Esther","blind")
let group2 = new People("mukaka","corban","loveness","deaf")
console.log(group1)
console.log(group2)
console.log(group1.disabled)
console.log(group2["elderly"])

//9.
class Animal{
    constructor(wild,domestic,mammal,reptiles){
        this.wild = wild;
        this.domestic = domestic;
        this.mammal = mammal;
        this.reptiles = reptiles;
       
    }
}
let animal1 = new Animal("Lion","cow","kangroo","snake")
let animal2 = new Animal("tiger","rabbit","humans","lizard")
console.log(animal1)
console.log(animal2)
console.log(animal1.wild)
console.log(animal2["mammal"])

//10.
class Job{
    constructor(jName,qualification,status,experience,salary){
        this.jName = jName;
        this.qualification = qualification;
        this.status = status;
        this.experience = experience;
        this.salary = salary;
    }
}
let job1 = new Job("manager","BBA","needed urgently","8 years","one million")
let job2 = new Job("steward","UCE Cert","taken","none","shs300000")
console.log(job1)
console.log(job2)
console.log(job1.jName)
console.log(job2["salary"])



