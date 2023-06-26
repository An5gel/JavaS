//EXERCISE
// 1.Create 2 string variables
// 2.Create 2 number variables
// 3.Use concatenation
// 4.Use Escape characters
// 5.Create 3 objects with 2properties
//  *const
//  *const.frozen
//   *object
// 5b.add 2 properties to each objct
// 5c. delete one property from each

// ANSWERS
// TWO STRING VARIABLES
let String8 = "Say hello";
let String9 = "world";
console.log(String8)
console.log(String9)

// TWO NUMBER VARIABLES
let num4 = 10;
let num5 = 15;
console.log(num4)
console.log(num5)

// USING CONCATENATION
let angel = "beautiful";
let hall = "unlucky";
console.log(angel + " but " + hall )

//USING ESCAPE CHARACTERS
let claire = "\'Claire is Tasha's friend, right?\'";
console.log(claire)

//constant variables can be added onto, deleted but cant be reassigned 
const herObject = {boyName: "Keith",height: "5.5ft"};
console.log(herObject)
//ADDING 2 PROPERTIES
herObject.class = "java";
herObject.size = "medium";
console.log(herObject)
//DELETING ONE PROPERTIES
console.log(delete herObject.height)
console.log(herObject)

//constant variable that are frozen don't change 
const hisObject =Object.freeze({dogName: "Rocky",character: "mature"});
console.log(hisObject)
//ADDING 2 PROPERTIES
hisObject.class = "java";
hisObject.size = "medium";
console.log(hisObject)
//DELETING ONE PROPERTIES
console.log(delete hisObject.character)
console.log(hisObject)

// this is an object;can be added onto delete from
var ourObject = {house: "bungalow",time:"8 years old"};
console.log(ourObject)
//ADDING 2 PROPERTIES
ourObject.size = "big";
ourObject.city = "Chicago";
console.log(ourObject)
//DELETING ONE PROPERTIES
console.log(delete ourObject.size)
console.log(ourObject)

