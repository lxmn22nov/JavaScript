// for each: doesn't return the value.
// const coding = ['js','swift','java','python','nodejs']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// Map, Reduce and Filter.

const myNum = [1,2,3,4,5,6,7,8,9]

// const newNums = myNum.filter( (num) => num > 5 )

// used block, mandatory to user return keyword.
const newNums = myNum.filter( (num) => {
    return num > 5
})
console.log(newNums);