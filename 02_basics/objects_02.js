//Singleton Object - Object created with constructor
const fireshipUser= new Object()
console.log(fireshipUser)

const nonSingletonObj = {}

fireshipUser.id="google101"
fireshipUser.name = "Ranjan"
fireshipUser.isLoggedIn = false

// console.log(fireshipUser)

 
const newUser = {
    email:"new@gamil.com",
    fullName:{
        userFullName:{
            // firstName:null,
            lastName:"Kumar"
        }
    }
}
// console.log(newUser.fullName.userFullName?.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3={...obj1,...obj2}//best way

//We objects can be merged with obj.assign
const obj4 = Object.assign({},obj1,obj2)//{} recommended in docs
//                         //target <- source
// console.log(obj3)
// console.log(obj4)


//Data coming from database...It comes as arrays of objects

const users=[
{

    id:1,
    email:"some@gmail.com"
    
},
{

},
{},
{},
{}
]

// console.log(users[0])

// console.log(fireshipUser)
console.log()

// console.log(Object.keys(fireshipUser))//keys array
// console.log(Object.values(fireshipUser))//values array
// console.log(Object.entries(fireshipUser))//like map of java


// console.log(fireshipUser.hasOwnProperty('name'))//prototypes




const course={
    courseName:"Javascript with Ranjan",
    price:"1999",
    courseInstructor:"Ranjan ofcourse"

}

//console.log(course.courseInstructor)

const {courseInstructor : inst} = course
// {course}.Instructor

// console.log(inst)

//react - props
// const navbar = ({company}) =>{//Destructuring of objects


// }
// navbar(company = "Ranjan")


//################## Json ###########################





