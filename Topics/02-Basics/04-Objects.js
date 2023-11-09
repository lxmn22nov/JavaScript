// how to make singleton, or

// const tinderUser = new Object()              // singleton object.
const tinderUser = {}                           // non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Jacob"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));           // OUTPUT: [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));         // OUTPUT: [ '123abc', 'Jacob', false ]
// console.log(Object.entries(tinderUser));        // Returns an array of key/values of the enumerable properties of an object.
// console.log(Object.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.


const regularUser = {
    email: "somebody@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Laxman",
            middleName: "Singh",
            lastName: "Koranga"
        }
    }
}

// console.log(regularUser.fullName);          // OUTPUT: { userFullName: { firstName: 'Laxman', middleName: 'Singh', lastName: 'koranga' } }
// console.log(regularUser.fullName.userFullName);                     // OUTPUT: { firstName: 'Laxman', middleName: 'Singh', lastName: 'Koranga' }
// console.log(regularUser.fullName.userFullName.firstName);           // OUTPUT: Laxman

// combining objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {3: "e", 4: "f"}

// const obj4 = {obj1, obj2}

// If we don't use the curly braces{}, all the values get stored into first "obj1"/var1.
const obj4 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj4);                   // objects inside object.
// console.log(obj1); 

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

// =============================== Objects destructuring and JSON API ====================================

const course = {
    courseName: "Chai aur Code",
    price: "free",
    courseInstructor: "Hitesh Choudhary"
}

// course.courseInstructor

// object destructuring. 
const {courseInstructor: tutor} = course

// console.log(tutor);

// ===============================================================================================================

// JSON

// {
//     "name": "laxman"
//     "age": 21
//     "Citizen": "Indian"
// }

[
    {},
    {},
    {}
]