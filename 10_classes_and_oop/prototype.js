// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sudipta = function(){
    console.log(`sudipta is present in all objects`);
}

Array.prototype.haysudipta = function(){
    console.log(`sudipta hello`)
}

// heroPower.sudipta()
// myHeros.sudipta()
// myHeros.haysudipta()

//inheritance
const user = {
    name: "chai",
    email: "sudipta@gmail.com"
}
const teacher = { 
    makeVideo : true
}
const teachingSupport = {
    isAvalable : false
}
const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__:teachingSupport
}
teacher.__proto__ = user

//Mordern syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "chaiAurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"hi".trueLength()