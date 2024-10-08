//  primitive data type

// 7 types :    String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// Reference type (non primitive) : 

// Arrays , Objects , functions , 

const heros = ["Iron Man" , "bat Man" , "Spider Man" , "Venom"]

let myObj = {
    name : "Anurag",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// copy mil rhi hai
let youtubeName = "abc xyz"
let otherName = youtubeName
console.log(otherName);

// reference
let user = {
    email : "user@google.com",
    upi : "user 1" 
}

let userTwo = user

userTwo.email = "hitest@google.com"

console.log(userTwo.email);
console.log(user.email);

