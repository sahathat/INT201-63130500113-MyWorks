// null underfind NaN
let absence1 = null
let absence2 = NaN
let absence3 = undefined

console.log(typeof(absence1)) //object
console.log(typeof(absence2)) //number
console.log(typeof(absence3)) //undefinded

console.log(absence1 == absence2) //false
console.log(absence1 == absence3) //true
console.log(absence1 === absence3) //false

//why var can't use to professional programming
var v = 0
if(v > 0){
    var u = 2
}
console.log(v+u) //return NaN when v <= 0 เพราะว่า u ยังไม่ได้ถูกประกาศ

//function for testing variable
let greet = 'hello'
function scope(){
    let greeting = 'hi'
}
scope() // call back fuction if declare by var can output on console.log
// console.log(greet + ' ' + greeting) //underfind or error

//var let const
var var1 = 1
let let1 = 1
const const1 = 1

//update value
var1 = 2
let1 = 2
// const1 += 1 //can't update value

//declare variable
var var1 = 3
// let let1 = 3 //can't declare variable
// const const1 = 3 //can't declare variable

console.log('Before function')
console.log('var ' + var1) // 3
console.log('let ' + let1) // 2
console.log('const ' + const1) // 1

//function
function noparamf() {
    var1 = 4 // var declare
    // let1 = 4 // can't access let with var in function
    // const1 = 4 // can't access const with var in function
    console.log('no param update function')
    console.log('var ' + var1) // 4
    var var1 = 4
    let let1 = 4
    const const1 = 4
    console.log('no param declarator function')
    console.log('var ' + var1) // 4
    console.log('let ' + let1) // 4
    console.log('const ' + const1) // 4
}

function paramf(var1,let1,const1) {
    var1 += 1
    let1 += 1
    const1 += 1
    console.log('param update function')
    console.log('var ' + var1) // 4
    console.log('let ' + let1) // 3
    console.log('const ' + const1) // 2
    var var1 = 4
    // let let1 = 4 // can't declare
    // const const1 = 4 // can't declare
    console.log('param declarator function')
    console.log('var ' + var1) // 4
}

paramf(var1,let1,const1)
noparamf()

console.log('After function')
console.log('var ' + var1) // 3
console.log('let ' + let1) // 2
console.log('const ' + const1) // 1


// template literal string
let name = `${113} sahathat`
let surname = `yingsakulkiet`
let fullname = `${name} ${surname}`
console.log(fullname) // 113 sahathat yingsakulkiet

//immutable
let num1 = 1
let num2 = num1
num1 = 2
console.log(num1 == num2) //false

//Convertor
let numS = '2'
let numN = 3
console.log(numS + numN) //23
console.log(numS * numN) //6

numS = Number(numS)
console.log(numS + numN) //5