let array = [2, 3, 4, 5, 6];

//high order function
function operator(array, fn) {
  return fn(array);
}

//average
function average(array) {
  let sum = 0
  sum = array.reduce((previous, current) => previous + current, 0);
  //นำค่าเริ่มต้นคือ 0 จาก reduce แล้วมาเป็น previous มาบวกกัน current ที่อยู่ในปัจจุบันก็คือ array index ที่ 0 พอมาบวกกันเสร็จ
  //แล้วก็จะมีการเรียกใช้ใหม่เป็น previous คือ current ก่อนหน้านั้น มาบวกกัน current ที่อยู่ในปัจจุบันก็คือ array index ที่ 1 พอมาบวกกันเสร็จ
  //อีกครั้งจะการทำแบบนี้ไปเรื่อย ๆ จนกว่าข้อมูล index ของ array จะบวกไปจนหมด index
  return sum / array.length;
}

//max value
function Max(array) {
  let max = 0
  max = array.reduce((previous, current) => Math.max(previous,current),0)
  return max;
}

console.log(operator(array, average));
console.log(operator(array, Max));

// Nested function with Closures
let SumOfScore = function (score) {
  function SumWithMultiply(MultiScore) {
    sum = score.reduce((previous, current) => previous + current, 0);
    return MultiScore * sum; //return type array are filtered
  }
  return SumWithMultiply; // return is function
};
let Multi = SumOfScore([1, 2, 3]);
console.log(Multi(2)); //12

// request with parameter
function greeting(name = "guest", ...friend) {
  function sayHi(message) {
    return `${message} ${name},${friend}`;
  }

  return sayHi;
}
Member = ["benz", "mod", "spy"]
let name = greeting(Member); 
console.log(name("Hi")); // Hi benz,mod,spy
let newUser = greeting(Member,"phai") 
console.log(newUser("Welcome")) //Welcome benz,mod,spy,phai

function reMatching(team1, team2){
  let team = new Array()
  team[0] = team1[0].concat(' and ',team2[0])
  team[1] = team1[1].concat(' and ',team2[1])
  return `team0 = ${team[0]} , team1 = ${team[1]}`
}
console.log(reMatching(['benz','phai'],['mod','om']))