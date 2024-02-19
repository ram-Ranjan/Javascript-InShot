const names ="Ranjan"
const counts= 30;

//console.log(names+counts+" Value"); not recommended
//now a days backticks are used

//
console.log(`Hello my name is  ${names} and my repCounts is ${counts}`)

console.log(names[0])

const address = new String('Jharkhand')
console.log(address[3])
console.log(address.__proto__)


console.log(address.length)
console.log(address.normalize) 

console.log('**************************************')
const newAdd = address.substring(-1,6) 
console.log(newAdd)

const sliceAdd=address.slice(-4,4)
console.log(sliceAdd)

console.log("###################################")
let add='Jhumari Telaiya'
const splitAdd = add.split(" ")
console.log(splitAdd);

const splitAllChars = add.split("")
//console.table([splitAllChars,splitAdd])


console.log("###################################")

var x=10
console.log(((Math.random()*10 )+1).toFixed())
//toFixed will fix the precision or no of digits after decimal

//We can even use round function
max=20,min=10
const roundedRandom= Math.round((Math.random()*(max-min+1))+min)
console.log(roundedRandom)//rounded to nearest integer

console.log(roundedRandom.toPrecision(5))// digits to display

// let add='Jhumari Telaiya'
console.log(...add)// o/p : J h u m a r i   T e l a i y a
const c =typeof (console.log(...add))// o/p : J h u m a r i   T e l a i y a
console.log(c)
const consoleLogType = console.log(c);
console.log(consoleLogType)//undefined type

// const typeCheck=typeof (...add) -Can't do