// uncomment to execute the code-block.

//this

// function bike() {
//     var name = "Ninja"
//     this.maker = "Kawasaki"
//     console.log(this.name + " " + maker)
// }

// var name = "Pulsar"
// var maker = "Bajaj"

// var obj = new bike()
// console.log(obj.maker)




// function abc() {
//         this.def = function () {
//             console.log("hello");
//         };
//     }

// var a = new abc()
// a.def()






// var obj1 = {
//     name:"rajesh",
//     age: function(){
//         console.log(this.name)
//     }
// }

// var obj2 = {
//     name:"gaurav",
//     age: obj1.age
// }

// var name = "Kiran"
// var age = obj1.age

// age()
// obj1.age()
// obj2.age()







// let a = 23n
// console.log(typeof a)


// let user = {}
// let user = new Object()

// let user = {
//     name: "John",
//     age: 30,
//     "whatever I am": true
// }

// console.log(user.name)
// //add new property
// user.profession = "IT"
// console.log(user)
// //delete property
// delete user.age
// console.log(user)
// user.name = "Gaurav"
// console.log(user)
// //space
// user["whatever I am"] = true
// console.log(user["whatever I am"])

// let user = {
//     name: "John",
//     age: () => {
//         console.log(30)
//     }
// }

// console.log(user.age)

//property short hand in Objects
// function makeUser(name, age) {
//     return {
//         name,
//         age
//     }
// }

// console.log(makeUser("John", 30))

//for-in loop

// let user = {
//     name: "John",
//     age: 30
// }
// console.log(Object.values(user))
// console.log(Object.keys(user))
// console.log(Object.entries(user))

// for (let key in user){
//     console.log(key)
// }
