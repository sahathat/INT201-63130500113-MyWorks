//high ordered function
function operator(x1,x2,fn){
    return fn(x1,x2)
}

// pure function
function add(x1,x2){
    let result = x1+x2
    return result
}

// pure function
function sub(x1,x2){
    return x1-x2
}

let sum = add
console.log('operator 3,1,add : '+ operator(3,1,add)) // 4
console.log('or operator 3,1,add : '+ operator(3,1,() => 3+1)) // 4
console.log('operator 3,1,sum : '+ operator(3,1,sum)) // 4
console.log('operator 3,1,sub : ' + operator(3,1,sub)) // 2

// Non-pure function
let multi = 0
function multiply(x1,x2){
    multi = x1*x2
    console.log(multi) // x1*x2
    return multi
}

console.log(multi) // 0
console.log('operator 3,1,multiply : ' + operator(3,1,multiply)) // 3

// Nested function with Closures
let getScoringPass=function(scores){
    //bind and store "scores" argument to use in the nested "cuttingPoint" function
    function cuttingPoint(cuttingScore){
        return scores.filter( (score)=> score>=cuttingScore ); //return type array are filtered
    }
    return cuttingPoint; // return inner function
};
// fn_cutting Point1 and fn_cutting Point2 are instance closure functions
// that bind to each their outer parameter "scores"
let fn_cuttingPoint1=getScoringPass([50,15,32,80,100]);
console.log(fn_cuttingPoint1(15)); // [ 50, 80, 100 ]
let fn_cuttingPoint2=getScoringPass([-10,-15,-53,-97,-32]);
console.log(fn_cuttingPoint2(-30)); // [ -10, -15 ]

let greeting = 'Welcome everyone in family';

function outer(name) {
  //higher order function
  let family = [];
  family.unshift(name);
  //inner is a closure function
  function inner(newMember) {
    console.log(greeting);
    family.unshift(newMember);
    return family;
  }
  return inner; //return inner function
}
const myInner = outer('Umaporn');
console.log(myInner('John'));
console.log(myInner('SuSan'));