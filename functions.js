// a function is a reusableblock of code
// syntax of a function
function functionname(){
    //function body/statement
}

//examples
//non-parametarised function; functions without parameters
function add(){
    console.log(2 + 3)
}
add();//function invocation

//parametrised fuctions
//a and b are parameters
function add2(a,b){
    console.log(a + b)
}
add2(5,4)

//the RETURN KEYWORD
function add3(c,d){
    return (c + d)
    //return exposes what ever has been defined
}
console.log(add3(42,33))
     //or
function add4(h,v){
    let sum = h + v;
    return sum //used a variable
}
add4()
console.log(add4(72,33))
console.log(add4(72))// the second argument is missing so the engine fills it up wirh 
//undefined so it prints NaN COZ 72 + UNDEFINED GIVES US NaN

function greeting(){
    console .log("how are you")
}
greeting()

// Variable scope
// local variables
// examples of local variables
function multiply(){
    let localVariable1 = 10;
    let localVariable2 = 2;
    let product =localVariable1*localVariable2
    return product
}
console.log(multiply())

// function addition(){
//   let total =localVariable1 + localVariable2;
//    return total 
// }
// console.log(addition())

//global variables
let globalVariable1 = 5;
let globalVariable2 = 10;
function multiply2(){
    let product = globalVariable1*globalVariable2;
    return product
}
console.log(multiply2())
function addition2(){
    let total = globalVariable1 + globalVariable2;
    return total
}
console.log(addition2())

// arrow functions
const sum = (a,b)=>{
    return a + b
}
console.log(sum(22,33))

// consise way of writing a non arrow function with one line of code in the body
const sum1 = (a,b) => a + b

// example
const sum2 = (a,b) => {
    let result =a+b
    return `The result is  ${result} per the calculation`
} 
console.log(sum2(2,5))