//object literals
const mysym=Symbol("key")
const jsuser={
    name:"Shiwam",
    email:"developershiwam1569@gmail.com",
    [mysym]:"dcvhgs",
    age:25,
    location:"Delhi",
}

jsuser.email="dsnckdb@gmail.com"
// Object.freeze(jsuser)// after this cant be change
jsuser.email="dncbjhbdhj"
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])
console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello shiwam");
}
console.log(jsuser.greeting())

jsuser.greeting12=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting12())


const arr=[1,2,"ljsaehfjhegrj",function sum(a=3,b=5){
return (a+b)
},4,5,]

console.log(arr[3](10,20))

