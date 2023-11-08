let myDate = new Date()

// console.log(typeof myDate);
// console.log(myDate);                        // directly printing the myDate variable.
// console.log(myDate.toString());             //  using toString to get date in order.
// console.log(myDate.toISOString());          // return date in ISO.
// console.log(myDate.toUTCString());          // Returns a date converted to a string using UTC.
// console.log(myDate.toLocaleDateString());   // Returns a date as a string value from host env current locale.

let myCreatedDate = new Date(2023, 10, 22)      // Months are started from (0=jan) in js.

// console.log(myCreatedDate.toDateString());

let myNewDate = new Date("22-12-1996")          // Invalid format("Date-Month-Year")
// console.log(myNewDate.toLocaleString());

let myNewDate1 = new Date("12-22-1996")         // In india we follow this format("Month-Date-Year").
// console.log(myNewDate1.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);                       // output will be given in milliseconds(ms).
// console.log(Math.floor(Date.now()/1000));       // changed output from ms to sec.

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    
})