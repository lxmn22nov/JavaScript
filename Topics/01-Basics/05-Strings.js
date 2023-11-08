// Strings are enclosed inside single('') and double quotes("").
const name = "Laxman"
const repoCount = 22

// Obsolete way of concatenating strings.
// console.log(name + repoCount);

// ${}- String Interpolation.
// console.log(`Hello, I'm ${name} and my repo count is ${repoCount}.`);

// Strings methods:

const gameName = new String('Lucky-Slayer')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('u'));

// const newString = gameName.substring(6,12)
// console.log(newString);

// const anotherString = gameName.slice(-12,6)
// console.log(anotherString);

// const anotherName = '  Laxman  '
// console.log(anotherName);
// console.log(anotherName.trim());

const url = "https://workspace.com/xd%20working"

console.log(url.replace('%20','-'));
console.log(url.includes('workspace'));