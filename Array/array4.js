// some เช็คเงื่อนไขว่าตรงกับค่าความจริงอย่างน้อย 1 ค่าใน function หรือไม่ ถ้าใช่ ให้ return true นอกนั้นเป็น false
// example 1 basic
function isBiggerThan10(element, index, array) {
    return element > 10;
} 
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true  

// example 2 arrow function
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true

// example 3
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true

//---------------------------------------------------------------------------

// include เช็คเงื่อนไขสมาชิกใน array ว่ามี element ทุกตัวที่กำหนด หรือไม่ถ้ามี return true นอกนั้นเป็น false
// example 1 include number
console.log([1, 2, 3].includes(2))         // true
console.log([1, 2, 3].includes(4))         // false
console.log([1, 2, 3].includes(3, 3))      // false
console.log([1, 2, 3].includes(3, -1))     // true
console.log([1, 2, NaN].includes(NaN))     // true
console.log(["1", "2", "3"].includes(3))   // false

// example 2 include character
let arr = ['a', 'b', 'c']
console.log(arr.includes('c', 3))    // false
console.log(arr.includes('c', 100))  // false
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
console.log(arr.includes('a', -100)) // true
console.log(arr.includes('b', -100)) // true
console.log(arr.includes('c', -100)) // true
console.log(arr.includes('a', -2))   // false

// example 3 include to character
arr.includes((function() {
    console.log(Array.prototype.includes.call(arguments, 'a'))  // true
    console.log(Array.prototype.includes.call(arguments, 'd'))  // false
  })('a','b','c'))