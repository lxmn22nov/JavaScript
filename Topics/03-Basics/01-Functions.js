// Functions.

function addTwoNumber(num1, num2) {
    console.log("Sum of two number: ",num1 + num2);
}

// addTwoNumber                        // reference.
// addTwoNumber()                      // NaN
// addTwoNumber(3,5)                   // 8

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// ========================================================================================================

// Functions with Objects.

// (...) is rest and spread operator, depends on the use case, how/where we are using it.
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,600));

// how to pass this object into function, let see.
const user = {
    userName: "Laxman",
    age: 21
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and her age is ${anyObject.age}.`);
}

//function arguement is object name.
// handleObject(user)

// handleObject({
//     userName: "Scarlett",
//     age: 38
// })

// passing array into function.
const myNewArray = [200, 455, 342, 344]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 455, 342, 344]));