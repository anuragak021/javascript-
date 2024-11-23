
const mySym = Symbol("key1")

const JsUser = {
    name : "Anurag" ,
    age : 18 , 
    location : "Jaipur" ,
    email : "anuragak021@gmail.com" , 
    "full name" : "sldjk",
    [mySym] : "ksjdf",
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser.mySym)

JsUser.email = "lksdjf"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User" , $(this.name)`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());