let myDate = new Date();
// console.log("toString : ",myDate.toString())//toString :Mon Feb 19 2024 12:05:45 GMT+0000 (Coordinated Universal Time)

// console.log("toDateString : ",myDate.toDateString())

// console.log("toLocaleString : ",myDate.toLocaleString()) //toLocaleString :  2/19/2024, 12:05:45 PM

// // console.log(typeof myDate)
// console.log("direct Date variable : ",myDate)
// console.log()
// console.log(typeof myDate.toLocaleString())
// console.log()
// console.log()

let myCreatedDate = new Date(5,1,1998)//months starts from 0
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp= Date.now()
console.log(myTimeStamp)//milisec from 1 jan 1900

console.log(myCreatedDate.getTime())//ms from this date


console.log()

console.log(Math.floor(myTimeStamp/1000))//in sec

let newDate = new Date();
console.log(newDate.getMonth()+1)
console.log()
console.log()

console.log(`Day is : ${newDate.getDay()+1} and the date is :${newDate.getDate()}`)


let customizedDate = newDate.toLocaleDateString("default",{
    weekday:"long",
    timeZone:"GMT"
})
console.log(customizedDate)









