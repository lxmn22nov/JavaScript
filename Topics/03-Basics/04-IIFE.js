// Immediately Invoked Function Expressions (IIFE)


// Named IIFE.
(function database() {
    console.log(`DB CONNECTED`);
})();

// Normal IIFE.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Cloud');