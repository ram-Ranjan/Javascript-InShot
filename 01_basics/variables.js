const accountId=null;//const must be initialized and can be null
//console.log(accountEmail) - cant access let and const variables without initialization.-(Not Hoisted)

let accountEmail = 'ranjanirl3107gmail.com'
console.log(accountId)
console.log(accountEmail)

console.log(x)//By default " undefined " - node tells variable is not initialized yet
var x=null;//It is telling a variable dont have a value (var is hoisted but initialization is inplace)

firstName = "Ranju"

console.table([firstName,x,accountEmail,accountId])

/*
Multiline comment
prefer not to use var
because of issue in block and functional scope
*/