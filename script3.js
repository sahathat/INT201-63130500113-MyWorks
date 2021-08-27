let i = 1;

function func(){
    let i = 2;
    console.log(i);
}

func();
console.log(i);

let str0 = 'LOL';
let str1 = "LOL";
let str2 = new String('LOL');
let str3 = new String("LOL");

console.log(typeof(str0));
console.log(typeof(str1));
console.log(typeof(str2));
console.log(typeof(str3));

let num = 555;

lit1 = `Hello`  + num;
lit2 = `Hello ${ num }` ;

console.log(lit1);
console.log(lit2);

let name = `Umaporn`; 
let greeting = `Hello ${ name }.`;

lit3 = 1;
lit4 = String(lit3);
console.log(lit3+lit4);

lit5 = '2';
console.log(lit4 * lit5);

lit1 = 'Book'
lit2 = 'ant'
console.log(lit1>lit2);

//string immutable
str = 'LOL';
console.log(str.toLowerCase());
console.log(str);
str = str.toLowerCase();
console.log(str);

a = [0,1,10]
b = [0,1,10]
c = {a: 0,b: 1,c: 10}
d = {a: 0,b: 1,c: 10}

