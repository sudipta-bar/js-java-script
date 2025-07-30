const user = {
    username: "su",
    price: 99,

    welcomeMessage: function X(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sudipta"
//      console.log(this.username)
//      console.log(this)
// }
// chai()

// const chai = function(){
//     let username = "sudipta"
//     //  console.log(this.username)
//      console.log(this)
// }
// chai()

const chai = () =>{
    let username = " sudipta"
     console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1,num2) => num1+ num2    // return lekhar kono proyojon nai 


// const addTwo = (num1,num2) => (num1+ num2)  // return lekhar kono proyojon nai 

const addTwo = (num1,num2) => ({username:"su"})
console.log(addTwo(3,4))