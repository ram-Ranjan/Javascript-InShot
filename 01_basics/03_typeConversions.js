const csScore = 13
console.log(typeof csScore)


const mathScore="10"//Either use Number.parseInt/parseFloat
const finalScore= Number.parseInt(mathScore) +csScore
console.log(finalScore)

const aptiScore="12"//or use Number()- constructor
let totalScore= Number(aptiScore)+finalScore
console.log(totalScore)

//or use + sign
const actualScore="-11.5"
totalScore+= +actualScore

console.log(totalScore)


//################ Number to String #####################
const num=100;
console.log(String(num))

console.log(num.toString())

//Even toFixed, toPrecision, and  toExponential converts Number into String


console.log("5"-3)//5 converted to number implicitly for - * / and unary +
console.log()
console.log("4"*"3")//
