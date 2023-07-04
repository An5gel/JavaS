//create 5 if statements
//create 5 switch cases
//create a switch case for arrays

//IF STATEMENTS
//1.if when expression  is true
let food ="Chapati with meat";
if (food == "Chapati with meat"){
    console.log("I will eat")
}else{
    console.log("I will not eat")
}

//2.if when expression is equal to
let time = 5;
if (time > 5){
    console.log("Your contract has ended")
}else if(time == 5){
    console.log("You are to renew your contract")
}else{
    console.log("Your contract has not ended yet")
}

//3. if when expression is false
let color ="Skyblue";
if (color == "red"){
    console.log("Peace")
}else{
    console.log("Danger")
}

//4.
let cars = 3;
if (cars < 3){
    console.log("Bring more")
}else{
    console.log("Better")
}

//5.
let favouriteCar = "Landrover"
if (favouriteCar != "Landrover"){
    console.log("NO")
}else if(favouriteCar == "Landrover"){
    console.log("YES")
}else{
    console.log("NO")
}

// SWITCH CASES
//1
let house = "mansion";
switch(house){
    case "mansion":
        console.log("wow");
        break;
    case "Ranch-style":
        console.log("Adventurous");
        break;
    case "Apartment":
        console.log("fancy");
        break;
    case "cottage":
        console.log("honeymoon");
        break;
    case "villa":
        console.log("Oh my God!"); 
        break;
    default:
        console.log("What kind of house is that?")
}

//2.
let answer = "yes";
switch(answer){
    case "great":
        console.log("really");
        break;
    case "ok":
        console.log("yes");
        break;
    case "yeah":
        console.log("yes");
        break;
    case "not sure":
        console.log("no");
        break;
    case "no":
        console.log("no"); 
        break;
    default:
        console.log("We didnt get your answer")
}

//3.
let music = "Oldies";
switch(music){
    case "soul":
        console.log("Relaxing");
        break;
    case "Oldies":
        console.log("yeah");
        break;
    case "hip pop":
        console.log("I see");
        break;
    case "gospel":
        console.log("Every body needs that");
        break;
    case "Amapiano":
        console.log("No way"); 
        break;
    default:
        console.log("What do you listen to?")
}

//4.
let positioning = 1;
switch(positioning){
    case 1:
        console.log("EXCELLENT");
        break;
    case 2:
        console.log("VERY GOOD");
        break;
    case 3:
        console.log("GOOD");
        break;
    case 4:
        console.log("GOOD");
        break;
    case 5:
        console.log("QUITE GOOD"); 
        break;
    default:
        console.log("You'll get there")                  
}

//5.
let runners = 5;
switch(runners){
    case 1:
        console.log("GOLD");
        break;
    case 2:
        console.log("SILVER");
        break;
    case 3:
        console.log("BRONZE");
        break;
    default:
        console.log("Well done, thanks")                  
}

//.A switch case for arrays
//1.we can print out by looping
 let colors  = ["blue" , "yellow","red","indigo","peach"];
 for(let angel of colors){
 switch(angel){
    case "blue":
        console.log("love");
        break;
    case "yellow":
        console.log("energy");
        break;
    case "red":
        console.log("brotherhood");
        break;
    case "indigo":
        console.log("like the rainbow?");
        break;
     default:
         console.log("Sorry, we dont have those")
 }}

 // or.calling out the array's indexes 
 let color1  = ["blue" , "yellow","red","indigo","peach"];
 switch(color1 [3]){
    case "blue":
        console.log("love");
        break;
    case "yellow":
        console.log("energy");
       break;
    case "red":
        console.log("brotherhood");
        break;
    case "indigo":
        console.log("like the rainbow?");
        break;
     default:
         console.log("Sorry, we dont have those")
 }