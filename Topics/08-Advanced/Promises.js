// promise is created by using new keyword, and Promise() takes callbacks as an parameters.
const promiseOne = new Promise(function (resolve, reject) {
    // do an asyn task.
    // db calls, cryptography, network.
    setTimeout(function () {
        console.log('Async task is complete.');
        resolve()
    }, 1000)
})

// Attaches callbacks for the resolution and/or rejection of the Promise.
promiseOne.then(function () {
    console.log("Promise Consumed.");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2.");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved.");
})

// let we have the data from the internet.
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Javascript", email: "example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Laxman", password: "123" })
        } else {
            reject("ERROR: Something went wrong.")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected."))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Aman", password: "12345" })
        } else {
            reject("ERROR: JS went wrong.")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then(() => {
        console.log(data);
    })
    .catch((error) => console.log(error))