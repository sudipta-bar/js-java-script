const user = {
    username: "sudipta",
    loginCount: 8,
    signedId: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)

    }
}

const userone = new User('sudipta',12,true)
const userTwo = new User("pritha",11,false)
console.log(userone.constructor)
// console.log(userTwo)