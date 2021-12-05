//reference: https://blog.sessionstack.com/how-javascript-works-regular-expressions-regexp-e187e9082913

let array = ["11","21","34","44","5"]

let value = 1
console.log(value) // 1

let pattern = new RegExp(value,"i");
console.log(pattern); // /1/i

const newSearch = array.filter((item) => {
  return item.match(pattern); //return boolean
});
console.log(newSearch); //[ '11', '21' ]

// test numeric by RegExp
let num = 9;
let regex = new RegExp('[0-8]');
console.log(regex.test(num)); //this will output true

// i flag no 
let str1 = "Hello Studytonight";
let regex1 = new RegExp('hello','');
console.log(regex1.test(str1)); // this will output false.

let regex2 = new RegExp('hello','i'); // i flag parameter to ignore case sensitivity in the search.
console.log(regex2.test(str1)); // this will output true.

