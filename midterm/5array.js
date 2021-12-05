// array literal
arr1 = [false, 1, 2, 3, "Four"];
console.log(arr1[1]); // 1
console.log(arr1[4]); // Four

arr2 = [
  { id: 1, name: "bob" },
  { id: 2, name: "alice" },
];
console.log(arr2[0]); // {id: 1,name: 'bob'}
console.log(arr2[1].name); // alice

arr2[2] = { id: 3, name: "charlie" };
console.log(arr2[2].name); // charlie

// how different of array and object
//#1
let products = ["Coke", "Pepsi"];
let prices = [15, 13];
// 1. array
// ข้อดี คือ แบบแบ่ง data type ของข้อมูล และจะแบ่งข้อมูลออกมาเป็นส่วน ๆ จะอยู่ต่างกลุ่มกัน

//#2
let product1 = [
  { product: "Coke", price: 15 },
  { product: "Pepsi", price: 13 },
];
// 2. array
// ข้อดี คือ แบบแบ่ง data ในแต่ละ object เก็บได้ 1 value ทำให้ดูง่าย เป็น item

//#3
let product2 = {
  products: ["Coke", "Pepsi"],
  prices: [15, 13],
};
// 3. object
// ข้อดี คือ แบบแบ่ง data type ของข้อมูล ทำให้ดูข้อมูลได้หลายชนิด และจัดรวมกันเป็นหมวดหมู่

// spread operator
let fibon = [0, 1, 1, 2, 3]; // length 5
let fibonacci = [...fibon, 5, 8, 13, 21]; // length equal 5+4=9

console.log(fibonacci); // [0,1,1,2,3,5,8,13,21]

// mutable
let num1 = [1, 2, { x: 1, y: 2 }];
let num2 = [...num1];
let num3 = num1;
num3[2] = num2;

console.log(num1 == num2); // false
console.log(num1 == num3); // true

//Constructor
let arr3 = [1, 2, 3];
let newArray = new Array(1, 2, 3);
console.log(arr3[1]); // 2
console.log(newArray[1]); // 2
console.log(arr3[1] == newArray[1]); // true
console.log(arr3 == newArray); // false

//Array.of and Array.from
let arrof = Array.of(...arr3);
let arrfrom = Array.from(arr3); // without spread operator
console.log(arrof[1]); // 2
console.log(arrfrom[1]); // 2
console.log(arrof[1] == arrfrom[1]); // true
console.log(arrof == arrfrom); // false

// add and delete
let box = [];
box[0] = "book";
box[1] = box[0];
delete box[1];
console.log(box); // ["book",null]

// for of loop
let letters = [..."Helloworld"];
// need spread array of characters result is ['H','e','l','l','o','w','o','r','l','d']
let msg = "";
for (let ch of letters) {
  msg += ch + ",";
}
console.log(msg); // H,e,l,l,o,w,o,r,l,d,

// destructor assignment
let [a1, b1, [c1, d1], ...rest1] = [1, 2, [3, 4], 5, 6];
console.log(a1); //1
console.log(b1); //2
console.log(c1); //3
console.log(d1); //4
console.log(rest1); //[5,6]

let { id, name, ...rest2 } = {
  id: 63130500113,
  name: "Sahathat",
  grade: [3.05, 3.47],
  status: "normal",
};
console.log(id); // 63130500113
console.log(name); // Sahathat
console.log(rest2); // {grade: [3.05,3.47] ,status: 'normal'}

// entries values
let letters1 = [..."Helloworld"];
let value = "";
for (let [index, letter] of letters1.entries()) {
  if (index % 2 === 0) value += letter; //letters at even indexes
}
console.log(`value: ${value}`); //"Hlool"

// Array method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

