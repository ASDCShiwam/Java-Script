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