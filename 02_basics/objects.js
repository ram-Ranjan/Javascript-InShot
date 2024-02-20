
//Object Literals


const mySym = Symbol('key101')

const myObj = {
    name:'Ranjan',
    age:26,
    email:"ranjan@gmail.com",
    [mySym]:"myKey1",
    isLoggedIn:false,
    loginDays:["sunday",'Wednesday']
}
// console.log(myObj.name)
// console.log(myObj.age)
// console.log(myObj[mySym]) //returns symbol
// // console.log(typeof (myObj.mySym))  -returns undefined
// console.log(myObj[`email`])//while using brackets you must add [" "]-strings

// console.log(myObj.loginDays)

// Object.freeze(myObj);//to lock an object

myObj.doStuff = function(x){
    console.log(`myObj is doing some ${x} stuff with ${this.name}`)//to refer the same object
}


console.log(myObj.doStuff('goood'))//by-default a method returns undefined

console.log(myObj)








