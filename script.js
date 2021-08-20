//declared value
x = 10
var xvar = 10;
let xlet = 10;
const xconst = 10;

//update value
x = x + 10
xvar = xvar + 10;
xlet = xlet + 10;
//xconst = xconst + 10;

//re-declared value
//x = "LOL"
//var xvar = "LOL";
//let xlet = "LOL";
//let xconst = "LOL";

console.log(x);
console.log(xvar);
console.log(xlet);
console.log(xconst);

let name = `Sahathat`;
let greeting$ = `Hello ${ name }.`;
let greeting = 'Hello ' + name +'.';

console.log(greeting$);
console.log(greeting);

for(i = 0; i<10 ; i++){
    if(i % 2 == 0){
        console.log(i*i);
    }else if(i + 0.3*xconst > 5){
        continue;
    }else {
        console.log(i++);
    }
}

var x = String(xlet)
console.log(typeof(x))

var x = Boolean('true')
console.log(typeof(x))

var x = 'y' * "4"
console.log(x)

console.log(xconst==10)

//If the two operands are different types,interpreter attempts to convert them to suitable type.
console.log(`15=='15'${15=='15'}`);
//true

//=== strict equality without type conversion
console.log(`15==='15'${15==='15'}`);
//false

//!== strict equality without type conversion
console.log(`15!=='15'${15!=='15'}`);

let str1 = "Hello"
console.log(`str1.length = ${str1.length}`);

let str2='hello';
console.log(`str1.toLowerCase===str2.toLowerCaseis ${str1.toLowerCase===str2.toLowerCase}`);

let myObj={id:1,task:'gradingexam'};
let myObj2={id:1,task:'gradingexam'};
newObj=myObj;
console.log(`newObj===myObj is ${newObj===myObj}`);
console.log(`myObj1===myObj2 is ${myObj===myObj2}`);

let a=[];
let b=a;
b[0]=1;
let c=[1];
console.log(`a===b is ${a===b}`);
console.log(`b==c is ${b==c}`);

