const accountId = 144553
let accountEmail = "abc@gmail.com";
var accountPassword = "12345"
accountCity = "Jaipur"
let accouuntState

// accountId = 2 //Not allowed

accountEmail = "dfdf@gmail.com"
accountPassword = "1234321"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountEmail);

/*

Prefer not to use var , because of issue in block scope and functional scope.

*/

console.table([accountId , accountEmail , accountCity , accountPassword , accouuntState]);

