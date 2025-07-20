//array in js is object
//array are resizable and can containt mix of different datatypes
//0 based indexing
//js array copy operstions creates shallow copy rather than deep copy
// shallow copy of an object is a copy whose properties share the same refernces means 
// when u change either the source or copy, you may also causing changes to other object too
// but in deep copy properties to do not share the same refernces
const arr=[0,1,2,3,4,5,6]

// console.log(arr[0])

// const arr1=["sdcdkj","dsckjd"]
// const aar2=new Array(1,21,4,8)

// //array methods

// arr.push(8)//add in last
// arr.push(9)//remove last
// arr.pop()
// console.log(arr)
//arr.unshift(10) // add in start
//console.log(arr)
//arr.shift()//remove first
console.log(arr)
// console.log(arr.includes(2))// true if present otherwise false
// console.log(arr.indexOf(3))

// const newarr=arr.join()
// console.log(newarr)// retun all but type is string

//slice, splice

console.log(arr.slice(1,3)) // exlude last index eliment
console.log(arr)

const mynewarr= (arr.splice(1,3)) // include last index ;and remove that part of array from original array
console.log(mynewarr)
console.log(arr)