// this keyword and Arrow functions.
// "this" keyword refers to the (current) object.

const user = {
    userName: "Laxman",
    age: 21,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the website.`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "Ram"
// user.welcomeMessage()

// console.log(this)               // {} empty parenthesis.

function one() {
    console.log(this);
}

// one()

const doe = function() {
    let userName = "laxman"
    console.log(this.userName);
}
// one()

// Arrow function.
const dumb = () => {
    let userName = "laxman"
    console.log(this.userName);
}

// Explicit return.
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,3));

// Implicit return.
const addThree = (num1, num2, num3) => (num1 + num2 + num3)

console.log(addThree(3,3,3));

// NOTE: parameters enclosed into {}"curly braces" should have to write the "return" keyword on the contrary, 
// parameters enclosed into ()"parenthesis" have no need.