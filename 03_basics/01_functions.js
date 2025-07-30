function sayMyName(){
    console.log("s")
     console.log("u")
      console.log("d")
       console.log("i")
        console.log("t")
}
// sayMyName()

function addTwoNumbers(num1,num2){
    // console.log(num1+num2)
   return num1+num2
}
const result = addTwoNumbers(2,3)
// console.log(result)

function loginUsermessage(username = "sam"){
    if(!username){
        console.log("plz enter a username");
    }
    else{
        return`${username} just logged in`
    }
}
// console.log(loginUsermessage("sudipta"))

function calculateCartPrice(val1,val2,...num1){  //... (rest oparetor)
    return num1
}
// console.log(calculateCartPrice(2,3,4,5,5,6,7,9))

const user = {
    username: "sudipta",
    prices:199
}
function handleObject(sanyobject){
    console.log(`username is ${sanyobject.username} and price is ${sanyobject.prices}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    prices:30
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([20,3,4]))