// const tinderuser = new object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sudipta"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email:"bar@gmail.com",
    fullname:{
        userfullname: {
            firstname : "sudipta",
            lastname: "bar"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

const users = [
    {
        id:1,
        email:"bar@.com"
    },
     {
        id:1,
        email:"bar@.com"
    },
     {
        id:1,
        email:"bar@.com"
    }
]

// console.log(users[1].email)

// console.log(tinderuser);

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('name'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hi"
}

// course.courseInstructor

const {courseInstructor:instructor} = course
// console.log(courseInstructor);
 console.log(instructor);


 [
    {},
    {},
    {}
]

