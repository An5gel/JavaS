// arrays
//store multiple values in a single variable

let number = [1,2,3,4,5]
console.log(number)
let alpha = ["kiwi","apples","grapes","blueberries"]
console.log(alpha)
let cars = new Array ("landrover", "rangerover","vitz","gipi")
console.log(cars)

//printing out a particular car fromthis array
console.log(cars[1])
// REPLACING ARRAYS
cars[1] = "BMW"
console.log(cars)
console.log(cars[1])

alpha.push("jackfruit")
console.log(alpha)
console.log(alpha.length)

//array methods
//the pop method
//it removes the last element of the array
alpha.pop()
console.log(alpha)

// the shift method
//it removes the first element of the array
alpha.shift()
console.log(alpha)

// the unshift method
//it adds a new   element of the beginning of the array
alpha.unshift("bannana")
console.log(alpha)

//the reverse method
//it reversees the elements of the array
alpha.reverse()
console.log(alpha)

//the join method
//it joins the elements of the array into a string
let string =alpha.join("  ")
console.log("............",string)

//delete item from the array
//deletes the specified index but doesnot delete the index
console.log(cars)
delete cars [1]
console.log(cars)

cars[1] = "volvo"
console.log(cars)

//splice method
// it removes, adds,and modifies element fromthe specified indices 
//the last index isnt included
cars.splice(1,2)
console.log(cars)

cars.splice(2,0,"jeep","ist")
console.log(cars)

//slice method
let newcars = cars.slice(1,3)
console.log(newcars)

// concat 
let  oddNumbers = [1,3,7,9]
let  evenNumbers = [0,2,4,6,8,10]
let primeNumbers = [2,3,5,7,9]
let allNumbers = evenNumbers.concat(primeNumbers, oddNumbers)
console.log(allNumbers)

// NESTED ARRAYS(multidimension arrays)
let hobbies = [["swimming",4],["sleeping",5],["talking",7,["else",8]]]
console.log(hobbies)
// print out first item from second sub array
console.log(hobbies[1][0])
console.log(hobbies[2])
console.log(hobbies[2][2][1])

//remove elements from arrays
hobbies[2].pop()
console.log(hobbies)

//adding elements into the subarray
hobbies[2].push("extraction2")
console.log(hobbies)

hobbies.splice(0,1)
console.log(hobbies)

//adding a sub array

hobbies.splice(1,0,["dancing",3])
console.log(hobbies)

let myHobbies = [["swimming",4],["sleeping",5],["talking",7]]
myHobbies.forEach((hobby)=>{
    hobby.pop(1)
})
console.log(myHobbies)

//flatten the array
//this removes all sub arrays and creates one
let herHobbies = [["swimming",4],["sleeping",5],["talking",7]]
const marco = herHobbies.flat()
console.log(marco)













