function saymyname(){
    console.log("Shiwam Yadav");
}
saymyname() // execution
saymyname// refernce

// function addtwono(a,b){
//     console.log(a+b)

// }
// addtwono(10,30)

function addtwono(a,b){
    let c=a+b
    return c

}
const d=addtwono(10,30)
console.log(d)

function lginuser(username){
    if(username === undefined){
        console.log("please enter username");
        return 
    }
    return (`${username} just logged in`)
}

console.log(lginuser("Shiwam"))//Shiwam just logged in
console.log(lginuser())//undefined just logged in

//

function calcartprice(...num){
    
    return num;

}
console.log(calcartprice(5,4,6))

//pass object in function
const user={
    username:"fnkbvfkjn",
    price:9000
}
function handleobject(anyobject){
    console.log(`user name is ${anyobject.username} price is ${anyobject.price}`)

}
handleobject(user)
// directly pass object in function
handleobject({username:"asdnkn",price:56})

//pass array in function

const array=[2,5,4,7,8,9]
function returnsecval(getarray){
    return getarray[1]

}
console.log(returnsecval(array))