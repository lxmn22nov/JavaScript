// Objects.

// Object.create
// Singleton: one of its kind.

// object literal.

// objects are created in key value pairs, through this we can access the values, like we access elements of array through index.

const mySym = Symbol("key1")                    // IMP, Read Symbol, from documentation.

const user = {
    name: "Laxman",
    "full name": "Laxman Singh Koranga",
    [mySym]: "myKey1",
    age: 21,
    location: "Uttrakhand",
    email: "lxmn@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

// can change the values.
user.email = "lxmn@google.com"

// we can freeze the object, so that we cannot make changes.
// Object.freeze(user)

console.log(user)

user.greeting = function() {
    console.log("Hello, JS user");
}

user.greeting1 = function() {
    console.log(`Hello, JS user, ${this["full name"]}.`);
}
// console.log(user.greeting());       // OUTPUT: Hello, JS! undefined  
// console.log(user.greeting);            // OUTPUT: [Function (anonymous)]   
console.log(user.greeting1());  