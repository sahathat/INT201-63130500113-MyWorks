
function greeting(){
    return 'hi'
}

console.log(greeting)

// hoisting
console.log(sum(4,5)) // 9

//function expression
function sum(a,b) {
    return Number(a)+Number(b);
}
console.log(sum(4,3)) // 7
console.log(sum('3','6')) // 9

// Name of function
let sub = function (a,b) {
    return Number(a)-Number(b);
}
console.log(typeof(sub)) // function
console.log(sub(4,3)) // 1
console.log(sub('3','6')) // -3

// Arrow function
let multi = (a,b) => {
    a=Number(a)
    b=Number(b)
    return a*b
    }
console.log(multi('3','6')) // 18

let randomDice = () => Math.floor(Math.random()*6)+1
console.log(randomDice()) // random between(1,6)

let factorial = n => n>=2 ? n*factorial(n-1) : 1
console.log(factorial(4)) // 24

let fact = factorial
console.log(fact(0)) // 1

// high order function
let operator = (a,b,fn) => fn(a,b)

console.log(operator(9,1,sum)) // 10
console.log(operator(9,1,sub)) // 8
console.log(operator(9,1,multi)) // 9

// print student
function printStudents(students){
    let result=''; //iterate through arguments
    let separator=arguments[0]; // arguments at 0 is *
    for(i=1;i<arguments.length;i++){
        result+=arguments[i]+separator; // iterate argument in each argument
    }
    return result;
}
console.log(printStudents('*','Alice','Bob','Charlie'));//*Alice*Bob*Charlie 

// default parameter function
function who(name = 'not found'){
    return name;
}
console.log(who())
console.log(who('LOL'))

// spread parameter function
function sum3(a,b,c){
    return a+b+c
}
sumOf = [1,2,3]
console.log(sum3(...sumOf)) // 6

// rest function
function printArray(...sumOf){
    print = ''
    for(i of sumOf){
        print += i
    }
    return print
}
console.log(printArray(sumOf)) // 1,2,3

// destructure function
v1 = [2,4]
v2 = [3,9]
function addVector(v1,v2){
    return [v1[0]+v2[0],v1[1]+v2[1]]
}
console.log(addVector(v1,v2)) // [5,13]
function subVector([x1,y1],[x2,y2]){
    return [x1-x2,y1-y2]
}
console.log(subVector(v1,v2)) // [-1,-5]