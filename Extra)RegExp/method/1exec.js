//exec(): return all result of array have regexp found text, index of string when found, string to inputs and groups
//without iteration
let regex = RegExp('fam*', 'g');
let str = 'make family everything familiar';

str = regex.exec(str);
console.log(str);
//output ['fam',index: 5,input: 'make family everything familiar',groups: undefined]

//with iteration
const regex1 = RegExp('fam*', 'g');
const str1 = 'make family everything familiar';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`); // regex.lastIndex return index of string when found text on RegExp
  // outputs "Found fam. Next starts at 8."
  // outputs "Found fam. Next starts at 26."
}