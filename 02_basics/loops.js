const arr = ['badger','beaver','baboon']

//  start     stop    after each
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

// console.log()
// //For of
// for(const x of arr)
// console.log(x)

//array itself is iterable //for of implementation can be overridden
arr[Symbol.iterator]=function(){
    let i=0;
    let arr=this;
    return {
        next:function(){
            if(i>arr.length){
                return {done:true};
            }else{
                const value = arr[i];
                i++;
                return {value,done:false};
            }
        }
    }

}
// console.log(arr)



//foreach() method
arr.forEach(v => console.log)

//for in