// Higher order Function.

// for of: Loop

const arr = [1,2,3,4,5,6]
const avengers = ['Thor','SpiderMan','Rocket']

// for (const i of arr) {
//     console.log(i);
// }

// for of: for String value.
// for (const value of avengers) {
//     console.log(value);
// }

// Map data structure: stroes unique key, value pairs only.

const map = new Map()

map.set('India', 'Asia')
map.set('United States', 'South America')
map.set('Kenya', 'Africa')
map.set('France', 'Europe')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key,'->', value);
// }

// NOTE: myObj is not iterable with for-of loop.
const myObj = {
    India: 'Cricket',
    USA: 'Rugby'
}

// for (const [key,value] of myObj) {
//     console.log(key,'->', value);
// }

// for-in loop: For objects.
const language = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby"
}

// for (const key in language) {
//     console.log(`${key} shortcut is for ${language[key]}.`);
// }

// For-in loop: For Arrays.

const programming = ['js','rb','py','java']

// for (const key in programming) {
//     // console.log(key);
//     console.log(programming[key]);
// }
