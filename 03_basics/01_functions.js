
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

function addTwoNumbers(number1 , number2){
    return (number1+number2);
}

const result = addTwoNumbers(3 ,5)

// console.log("result: " , result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())