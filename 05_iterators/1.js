// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    // if(element == 5){
    //     console.log("5 is best number");
    // }
}

//console.log(element);

// for (let i = 0; i < 10; i++) {
//     // const element = array[i];
//     console.log(`Outer loop : ${i}`);
//     for (let j = 0; j < 10; j++) {
//         // const element = array[j];
//         console.log(`Inner loop ${j} , outer loop , ${i}`);
//     }
// }

let myArray = ["flash" , "batman" , "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if(i % 5 == 0){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
