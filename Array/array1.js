// foreach ทำเหมือนกับ for loop และจะวนใน function ทำการวง loop ที่ละชิ้นๆ 

// example 1
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

// example 2
function logArrayElements(element, index) {
    console.log('a[' + index + '] = ' + element)
}
[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

// example 3
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count) // 3
console.log(obj.sum) // 16

//---------------------------------------------------------------------------

// shift - reverse pop of stack
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish)); // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish); // myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted); // Removed this element: angel

//---------------------------------------------------------------------------

// unshift - reverse push of stack
let arr = [1, 2]

arr.unshift(0) // arr is [0, 1, 2]

arr.unshift(-2, -1) // arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]) // arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]) // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]


