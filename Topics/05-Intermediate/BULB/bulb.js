var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");

var flag = 0;

button.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        flag = 1
    } else {
        bulb.style.background = "transparent";
        flag = 0
    }
})