// for each loop.

const coding = ['js','swift','java','python','nodejs']

// coding.forEach(function (val) {
//     console.log(val);
// })

// Arrow function.
// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(val) {
//     console.log(val);
// }
// coding.forEach(printMe)

// coding.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// })

const myCoding = [
    {
        langName: 'JavaScript',
        langFileName: 'js'
    },
    {
        langName: 'Java',
        langFileName: 'java'
    },
    {
        langName: 'Python',
        langFileName: 'py'
    }
]

myCoding.forEach( (val) => {
    console.log(val.langName);
    console.log(val.langFileName);
})