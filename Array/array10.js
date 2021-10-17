// join เป็นการกำหนดคำเชื่อมที่ใช้ระหว่าง element หนึ่งกับ element หนึ่ง
var a = ['Wind', 'Water', 'Fire'];
console.log(a.join()) // 'Wind,Water,Fire'
console.log(a.join(', ')) // 'Wind, Water, Fire'
console.log(a.join(' + ')) // 'Wind + Water + Fire'
console.log(a.join(''))    // 'WindWaterFire'

//---------------------------------------------------------------------------

// reduce เป็นการลดรูปเพื่อให้เขียนรูปฟังก์ชันให้ง่ายขึ้น
// โดยใช้ reducer ทำการเป็น callback function แล้วนำ ค่าที่อยู่ก่อนหน้านี้มาทำการทำ operate กับ
// ค่าที่อยู่นี้ แล้ว return ผลลัพธ์ออกมาในรูปของ reduce

const array1 = [1, 2, 3, 4];
// function callbackFn(previousValue, currentValue, currentIndex, array) { ... }
// (previousValue, currentValue, currentIndex, array) => { ... }
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// example 1
// reduce(callbackFn) = 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// example 2 initial values
// reduce(callbackFn, initialValue) = 5 + reducer = 5 + (1 + 2 + 3 + 4)
console.log(array1.reduce(reducer, 5));
// expected output: 15

// example 3 reducer object in array
let initialValue = 5
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)
console.log(sum) // 11

// example 4
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(previousValue, currentValue) {
      return previousValue.concat(currentValue)
    },
    []
)
console.log(flattened)
// flattened is [0, 1, 2, 3, 4, 5]

// example 5
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice','Tiff','Alice']
let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
console.log(countedNames)
// countedNames is:
// { 'Alice': 3, 'Bob': 1, 'Tiff': 2, 'Bruce': 1 }

// example 6
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}]
// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
}, ['Alphabet'])
console.log(allbooks)
// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

// example 7
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])
console.log(myArrayWithNoDuplicates) // [ 'a', 'b', 'c', 'e', 'd' ]

// example 8
const numbers = [-5, 6, 2, 0,];
const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);
console.log(doubledPositiveNumbers); // [12, 4]
