// map update ค่าทุกตำแหน่งบน array ภายใต้ฟังก์ชัน โดยใช้หลักการเดียวกับ foreach
// example 1 Basic
let numbers = [2,3,4,6]
let result = numbers.map((numbers)=> numbers*2)
console.log(result) // [4,6,8,12]

// example 2 Using map generically
let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// example 3 Covert to string
let numberArray1 = ["1", "2", "3"].map(parseInt)
console.log(numberArray1) // [1,Nan,Nan]

let numberArray2 = ["1", "2", "3"].map(num => parseInt(num))
console.log(numberArray2) // [1,2,3]

//---------------------------------------------------------------------------

// concat นำ array แต่ละตัวมาจับรวมกันสามารถรวมกันได้หลาย array
let number1 = [2,3]
let number2 = [4,6]
let number3 = [8,18]
let con12 = number1.concat(number2)
let con123 = number1.concat(number2,number3)
console.log(con12) // [2,3,4,6]
console.log(con123) // [2,3,4,6,8,18]