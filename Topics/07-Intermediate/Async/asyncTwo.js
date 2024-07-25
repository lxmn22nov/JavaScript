/*
setInterval(): method repeatedly calls a function or executes a code snippet with a 
fixed time delay between each call.
- this method returns an interval Id which uniquely identifies the interval, 
so we can remove it later by calling clearInterval().
*/
const sayDate = function (str) {
    console.log(str, Date.now());
}

// const intervalId = setInterval(sayDate, 2000, "Hello, ")

/*
clearInterval(): method cancels a timed, repeating action which was previously established
byu ac call to setInterval().
- if the parameter provided doesn't identify a previously established action, this method
does nothing.
*/

// clearInterval(intervalId)

let intervalId;

const startTime = function () {
    intervalId = setInterval(sayDate, 1000, "Hello, ");
}

const stopTime = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startTime);
document.querySelector("#stop").addEventListener("click", stopTime);