/* 
setTimeout(): method sets a timer which excutes a function or specified piece 
of code once the timer expires. 
- with asyn functions: the timer function will not pause execution of other functions
in the functions stack.
*/
setTimeout(function () {
    console.log("Laxman Singh Koranga");
}, 3000)

/* 
we can provide reference to the method, by creating a const assigning the 
function with it.
*/
const sayTheName = function () {
    console.log("Lord Snow!");
}
setTimeout(sayTheName, 2000)

/*
Now, want to change the heading of the Html header, using setTimeout.
*/
const heading = function () {
    document.querySelector("h1").innerHTML = "Coding | Learning | Sleeping"
}
// assigning the setTimout into a const.
const changeMe = setTimeout(heading, 3000)

/*
clearTimeout(): method cancels a timeout previously established by calling setTimeout().
- the parameter provided doesn't identify a previously established action, this 
method does nothing.
*/

// we can declare straight-away.
// clearTimeout(changeMe)

// but let's make it little dynamic and fit this method to the event.
document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeMe)
    console.log("STOPED!")
})
