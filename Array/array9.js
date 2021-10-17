// sort เรียง array จากน้อยไปยังมาก
// example 1 sort by string when element is number
var numbers1 = [41, 42, 445, 91, 35];
numbers1.sort();
console.log(numbers1); // [ 35, 41, 42, 445, 91 ]

// example 2 comparator by number
var numbers2 = [41, 42, 445, 91, 35];
numbers2.sort(function(a, b) {
  return a - b;
});
console.log(numbers2); // [ 35, 41, 42, 91, 445 ]

// example 3 sort by string
let stringArray = ['Blue', 'Humpback', 'Beluga'];
stringArray.sort(); 
console.log(stringArray) // ['Beluga', 'Blue', 'Humpback']

// example 4 sort by non ascii character
let items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items)
// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']


//---------------------------------------------------------------------------

// findIndex หาข้อมูลจากเงื่อนไขใน function และ return เป็น index ใน array
// example 1
function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
}
console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

// example 2
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); // 3
console.log(fruits[index]); // blueberries