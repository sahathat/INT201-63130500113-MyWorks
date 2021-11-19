//replace(): can replace first index of string parameter has equal by normal string and regexp of string pattern
const p = 'The girl is a beautiful girl';
console.log(p.replace('girl', 'lady'));
//output: "The lady is a beautiful girl"
console.log(p);
//output: "The girl is a beautiful girl"

console.log();

const regexi = /girl/i; //replaceAll should ignore case sensitivity or insensitivity flag regexp
console.log(p.replace(regexi, 'woman'));
// output: "The woman is a beautiful girl"
console.log(p);
//output: "The girl is a beautiful girl"

console.log();

//replaceAll(): can replace all string parameters have equals by normal string and regexp of string pattern
console.log(p.replaceAll('girl', 'lady'));
//output: "The lady is a beautiful lady"
console.log(p);
//output: "The girl is a beautiful girl"

console.log();

const regexg = /girl/g; //replaceAll should global flag regexp
console.log(p.replaceAll(regexg, 'woman'));
//output: "The woman is a beautiful woman"
console.log(p);
//output: "The girl is a beautiful girl"