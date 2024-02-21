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

console.log(expFunc())//expression functions can be called by variable with ()  expFunc()
//it is not hoisted - less likely to pollute global namespace


//Annonymous Function

const someAnny=() => {
    const x='I dont have a name';
    console.log(x)
}


//=======================IIFE====================================
// Immediately Invocable Function Expression

(function(){
    const x='I dont have a name';
    console.log(x)
})()// goofy like dogballs -
//by Douglas Crockford - pioneered JSON(involved in popularization and advocating)


//Arguments

//Positional
function webDev(beg,inter,adv)
{
    console.log(arguments)
    return `Web Development includes adding ${beg} , ${inter}  and ${adv}`
}
console.log(webDev('js',"react",`nodejs`))


//To avoid positionality - use objects 
//named Params
function frontEnd(params){
    const {beg,inter,adv}=params//??
    return `frontEnd devlopement includes ${beg} , ${inter}  , and ${adv}.`
}
console.log(frontEnd({adv:'js',inter:"css",beg:'html'})
)


//Rest Params
function backendDev(...args)
{
    return `Backend Development includes : ${args.join()}`
}

console.log(backendDev("Nodejs","NextJs","Spring Boot"))


console.log()
console.log()
//##################### Arrow Function ######################

const designWebpage = (param) => `use ${param}`//single line

console.log(designWebpage('figma'))


const designWebpage2 = (param) => {

return `use ${param}`//multi line- have to write return
//they dont have this object

}



// function dog(){
    
//     var self = this;

//     this.breed = "Pug"

//     setTimeout(function(){
//         console.log(this.breed);//undefined
        
//         console.log(self.breed)//Pug
//     })


// }
dog()

function dog(){
    
    var self = this;//this will help other functions to access dog variables 

    this.breed = "Pug"

    setTimeout(() =>{
        console.log(this.breed);//undefined
        
       // console.log(self.breed)//Pug
    },100);//ms delay
}

//#################### Pure Function ###################

let x=22
const impure =() =>{
    return x++;//since it is using a variable which from outside the scope of the function
}

const pure= (x) =>x**2;
console.log(pure(4)) //NaN if function is called without param


//Higher Order function -- 
// First Class function - fuctions whose arguments are functions  or the return type is fuction

const hof=(inputFunc) =>{
    const called = inputFunc()

    return ()=>'output func'
}

//setTimeout is inbuilt higher order function

let haveFun= () => console.log('Having Fun!!!');
setTimeout(haveFun,50)//callback function
//Javascript engine calls the function automatically after a delay hence its called callback function

const arr = [1,2,3,4]

const squared =[]










 






