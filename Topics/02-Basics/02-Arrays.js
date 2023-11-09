const marvel_heroes = ["Thor","IronMan","SpiderMan"]
const dc_heroes = ["AquaMan","WonderWomen","SuperMan"]

// .push method add second array(itself) into the first one.
marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);    // OUTPUT: ['Thor','IronMan','SpiderMan',[ 'AquaMan', 'WonderWomen', 'SuperMan' ]]

// .concat method returns a new array containing the elements of the first & second array elements.
const allHeroes = marvel_heroes.concat(dc_heroes)

// console.log(allHeroes);           // OUTPUT: ['Thor','IronMan','SpiderMan','AquaMan','WonderWomen','SuperMan']

//[...var1, ...var2, ...var3, ...] spread method.

const all_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_heroes);        // OUTPUT: ['Thor','IronMan','SpiderMan','AquaMan','WonderWomen','SuperMan']

// array inside array situation, when we want to flat/put all elements into one single array, we us .flat method too.
const arrInsideArr = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]

const real_another_array = arrInsideArr.flat(Infinity)

// console.log(arrInsideArr);
// console.log(real_another_array);        // OUTPUT: [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]

// checking "Laxman" is array or not.
console.log(Array.isArray("Laxman"));       // OUTPUT: false

// .from method turns string into an Array.
console.log(Array.from("Laxman"));          // OUTPUT: [ 'L', 'a', 'x', 'm', 'a', 'n' ]

console.log(Array.from({name: "laxman"}));          // Imp, check documentation.

let score1 = 100
let score2 = 200
let score3 = 300

// Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));