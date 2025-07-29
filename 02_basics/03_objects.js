// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "sudipta",
   "full name" : "sudipta bar",
   [mySym]:"mykey1",
   age:18 ,
   location:"kakdwip",
   email:"barsudipta@gmail.com",
   isLoggedIn:false,
    lastLoginDays: ["monday" , "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "bar@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "su@gmail.com"
// console.log(jsUser);

jsUser.greet = function(){
    console.log("hello js user ");
}
jsUser.greetOne = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(jsUser.greet());
console.log(jsUser.greetOne());