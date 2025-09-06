const promisceOne = new Promise(function(resolve,reject){
     //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is compelete');
        resolve()
    },1000)
})

promisceOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved')
})

const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",email: "barsudipta@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "java", password: "123"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('the promise is either resloved or rejected')
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: 'javascript' , password: '123'})
        }
        else{
            reject ('ERROR: ')
        }
    },1000)
})
async function consumePromiseFive (){
    try {
       const response = await promiseFive
       console.log(response) 
    } catch (error) {
       console.log(error) 
    }
}

consumePromiseFive()

// async function getAllusers(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E :" ,error);
//     }
// }
// getAllusers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
})