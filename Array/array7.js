// fill เปลี่ยนบาง element ที่อยู่ใน array
// example 1
console.log([1, 2, 3].fill(4))                // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1))             // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2))          // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1))          // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 1))          // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2))        // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN))      // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5))          // [1, 2, 3]
console.log(Array(3).fill(4))                 // [4, 4, 4]
console.log([].fill.call({ length: 3 }, 4))   // {0: 4, 1: 4, 2: 4, length: 3}

// example 2 object in array 
// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
console.log(arr)
arr[0].hi = "hi" // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr)

//---------------------------------------------------------------------------

// find หาข้อมูลจากเงื่อนไขใน function และ return เป็น element ใน array
// example 1
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
const result = inventory.find( ({ name }) => name === 'cherries' );
console.log(result) // { name: 'cherries', quantity: 5 }

// example 2
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
        }
    }
  return element > 1;
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// example 3
// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
