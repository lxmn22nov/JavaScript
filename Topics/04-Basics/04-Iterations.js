// Iterations.

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Loop inside loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + ' * ' + j + ' = ' + (i*j));        
//     }
// }

const myArr = ["Captain America", "Thor", "Superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue.

for (let index = 1; index < 10; index++) {
    if (index == 3) {
        console.log(`Detected 3.`);
        // break                            // loop got terminated at index 3.
        continue
    }
    console.log(`Value of indices is ${index}.`);
}