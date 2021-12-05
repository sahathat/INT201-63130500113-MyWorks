//test(): check condition if found parameter on string text return true overwise return false.
const str = 'in a space of time spark';
const regex = new RegExp('spa');
const globalRegex = new RegExp('spa', 'g');

// how diffent of Regexp by default type and global type
console.log(regex.test(str));
//output: true
console.log(regex.lastIndex);
// doesn’t matter what position. spa is present so it outputs 0
console.log(regex.test(str));
//output: true
console.log(regex.lastIndex);
// doesn’t matter what position. spa is present so it outputs 0
console.log(regex.test(str));
//output: true
console.log(regex.lastIndex);
// doesn’t matter what position. spa is present so it outputs 0
console.log(globalRegex.test(str));
// output: true
console.log(globalRegex.lastIndex);
// output: 8
console.log(globalRegex.test(str));
// output: true
console.log(globalRegex.lastIndex);
// output: 22
console.log(globalRegex.test(str));
// output: false
console.log(globalRegex.lastIndex);
// output: 0 (because spa only occurs in position 8 and 22)