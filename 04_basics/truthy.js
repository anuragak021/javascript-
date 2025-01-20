const userEmail = []

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

//falsy values
/*
false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan
*/
//thruthy values
/*
true , 'false' , " " , [] , {} , function(){} , 
*/

// if(userEmail.length === 0){
//     console.log("sdlfhkj");
// }

// Nullish coalescing operator 

let val1 ;
// val1 = 5 ?? 10
val1 = undefined ?? 10

// console.log(val1);

// Terniary operator 

// (condition) ? true : false

const iceTeaPrice = 100 

iceTeaPrice <= 80 ? console.log("less Than 80") : console.log("More than 80");

