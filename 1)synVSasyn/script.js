//synchronous
console.log(1);
console.log(2);
console.log(3);

//asynchronous
setTimeout(() => console.log(1), 1000);
setTimeout(() => console.log(2), 2000); //delay 2 second or 2000 milsecond
setTimeout(() => console.log(3), 3000);

let number = 0;
setTimeout(() => {
  console.log(number); //work in 0 milsecond
  number = 4;
}, 3000);
console.log(number) //don't work //0