// hoisting use by var and global scope
console.log(sum([1,2,5,10]));

//traditonal function declaration
function sum(numbers) {
    let total = 0;
    for (let num of numbers) total += num;
    return total;
}

// console.log(numbers);
// error because numbers use in block scope function only

//traditonal function expression
let mySum = function(numbers) {
    let total = 0;
    for (let num of numbers) total += num;
    return total;
}

console.log(mySum([1,2,3]));



let myDetMatrix = function(a11,a21,a12,a22) {
    return a11*a22 - a12*a21;
}

console.log(myDetMatrix(2,3,4,5)); // normal param
console.log(myDetMatrix(...[2,3],...[4,5])); // spread param


//arrow function
let [a,b,c,d] = [1,2,3,4];

a = () => {
    return a+2;
}

b = (b) => b^2

c = c => c*2

d = d => {
    for(let x ;x<d;x++){
        d += 1
    };
    return d;
}

console.log([a(),b(b),c(c),d])


// function expression

//1
let getCourse = () => 'INT201 Client Side Programming I';
console.log(getCourse())

//2
let echo = text => text;
console.log(echo('lol'))

//3
let isKMUTTStudent = student => student.id.length == 13
console.log(isKMUTTStudent({id:[6,3,1,3,0,5,0,0,1,1,3]}))

//4
let sum3 = (num1, num2, num3) => num1+num2+num3
console.log(sum3(2,3,4))

//5
let greetingSomeOne = name => {
    const greeting = ['hi', 'hello', 'hey'];  
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}
console.log(greetingSomeOne('lol'))

//examples of reduce and map functions
let products = [
    { prodId: 1, price: 10, amount: 2 },
    { prodId: 2, price: 5, amount: 10 }
];
  
let priceIncludeVat = products.map(
    (product) => product.price + product.price * 0.07
);
console.log(priceIncludeVat);

let totalAmt = products.reduce(
    (total, curProd) => (total += curProd.amount),0
);
console.log(totalAmt);

function printStudents(students){
    let result=''; //iterate through arguments
    let separator=arguments[0];
    for(i=1;i<arguments.length;i++){
        result+=arguments[i]+separator;
    }
    return result;
}
console.log(printStudents('.','Adam','John','Danai'));//Adam.John.Danai.