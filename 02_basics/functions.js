var persons=5

//================function Defination/Declaration==========
function makeMaggie(persons)//It is hoisted-can be called above declaration
{

    const maggie = persons*2
    const timeRequired = maggie*2
    return persons//function by default returns undefined

   // return timeRequired - adding multiple return statements wont throw any error,it will return the first return statement

}

console.log(makeMaggie(5)," mins")
//A functions can be called without passing a parameter-: it will give  "  NaN - not a number "



//================function Expression==========

const expFunc = function(){//prefered above declartion since not hoisted
    const expFuncValue=100;
    return expFuncValue;
}

console.log(expFunc)//expression functions can be called by variable name
//it is not hoisted


//=======================IIFE====================================
//



