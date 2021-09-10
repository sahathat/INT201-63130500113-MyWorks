//#1
let products = ["Coke","Pepsi"]
let prices = [15,13]
// 1. array
// ข้อดี คือ แบบแบ่ง data type ของข้อมูล และจะแบ่งข้อมูลออกมาเป็นส่วน ๆ จะอยู่ต่างกลุ่มกัน

//#2
let product1 = [
    {product:"Coke", price:15},
    {product:"Pepsi", price:13}
]
// 2. array
// ข้อดี คือ แบบแบ่ง data ในแต่ละ object เก็บได้ 1 value ทำให้ดูง่าย เป็น item

//#3
let product2 = {
    products: ["Coke","Pepsi"],
    prices: [15,13]
};
// 3. object
// ข้อดี คือ แบบแบ่ง data type ของข้อมูล ทำให้ดูข้อมูลได้หลายชนิด และจัดรวมกันเป็นหมวดหมู่

let player1 = { id: 1, name:'Adam'};
console.log(Object.prototype.isPrototypeOf(player1));
console.log(Dice.prototype.isPrototypeOf(player1));