// slide ทำการเรียก array ในช่วงที่ index ที่กำหนดไว้ จาก ตำเริ่มต้น จนถึงตำแหน่งที่จะถูกเรียก
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1)); //จาก 2 ถึง 4(-1)
// expected output: Array ["camel", "duck"]

//---------------------------------------------------------------------------

// reverse ทำการย้อนกลับตำแหน่งของ array ทุกตัว เช่นจากตำแหน่งสุดท้ายเป็นตำแหน่งที่หนึ่ง
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

// check condition of reverse
console.log('array1===reversed' + array1===reversed); // false
