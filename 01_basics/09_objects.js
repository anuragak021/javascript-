// const tinderUser = new Object()  // singleton object

//non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedin = false;

// console.log(tinderUser);

const regularUser = {
    email : "someday@gmail.com",
    fullname : {
        userfullname : {
            firstname : "anurag",
            lasrname : "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const object1 = {
    1 : "a" , 
    2 : "b" 
}
const object2 = {
    3 : "a" , 
    4 : "b"
}

const object3 = {object1 , object2};
console.log(object3);