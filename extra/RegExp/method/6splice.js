//splice(): return array of substring
//when split have separator ' ' return word,
//when split have separator '' return character include spacebar.
//and when split is undefinded value return string copy of array.
const str = 'The house is beautiful and spacious';
const words = str.split(' ');
console.log(words[3]);
//output: "beautiful"
console.log(words.length);
//6

const chars = str.split('');
console.log(chars[8]);
//output: "e"
console.log(chars.length);
//35

const strCopy = str.split();
console.log(strCopy);
//output: Array ["The house is beautiful and spacious"]
console.log(strCopy.length);
//1