const arr = [5,21,3,1,55,6]



//double
const out =arr.map(double)

function double(x)
{
    return x*2;
}
// console.log(out)



// const arrowOut =arr.map(double) =>(){
//     return 
// }

function double(x)
{
    return x*2;
}
// console.log(out)


//triple

const tripleRes=arr.map(triple);

function triple(t)
{
  return t*3
}

//binary

const binaryRes = arr.map(binary);
function binary(b)
{
   return b.toString(2)
}

console.log(binaryRes)