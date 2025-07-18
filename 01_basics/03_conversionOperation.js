let score =1569

let score1 ="1569"

let newscore = Number(score1)
console.log(typeof newscore) // number

let score2 ="123abc"
let arr = [{
    name:"sdbvjhgbfj",age:56
}, {
    a:1}]
console.log(typeof arr)
let newscore1 = Number(score)
console.log(typeof newscore) // number
//but
console.log(newscore) // Nan

let a = null
console.log(typeof a) // object
console.log(a) //null

let b=Number(a)

console.log(b) // 0

let c = undefined
console.log(typeof c)
console.log(c)

let d=Number(c)
console.log(d)

let isLoggedin = 1

let isbooleanloggein= Boolean(isLoggedin)
console.log(isbooleanloggein) // true

let isLogg = "dcbhjb"

let isbooleanlogg= Boolean(isLogg)
console.log(isbooleanlogg) // true

// 1=> true 0=> false ""=>false "dcbjhsb"=>true

let abc= 12
let bcd=String(abc)
console.log(bcd)

console.log(typeof bcd) //string

let gameCounter = 100
gameCounter++;
console.log(gameCounter);//101
++gameCounter;
console.log(gameCounter); //102



let obj = ()=>{}


function abc() {

}

(function u() {
    
})()
console.log(typeof obj,typeof abc, typeof u)
