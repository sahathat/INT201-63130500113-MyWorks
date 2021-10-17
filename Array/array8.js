// push ทำการใส่ stack index สุดท้าย ของ array และ return เป็นค่าได้จาก length ของ array ตัวนั้นเมื่อได้ผลลัพธ์ออกมาแล้ว
// example 1
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4

// example 2
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

//---------------------------------------------------------------------------

// pop บันทึกค่าใน index สุดท้าย ที่โดย pop และลบทิ้ง
// example 1
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

let popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

// example 2
var myFishObj = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var poppedObj = Array.prototype.pop.call(myFishObj); //same syntax for using apply( )

console.log(myFishObj); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(poppedObj); // 'sturgeon'

//---------------------------------------------------------------------------

// filter จะ return array ที่ผ่านเงื่อนไขการทดสอบใน ฟังก์ชันทุกเงื่อนไข
// example 1
function isBigEnough(value) {
    return value >= 10
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered)
// filtered is [12, 130, 44]

// example 2
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// example 3
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}
console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
