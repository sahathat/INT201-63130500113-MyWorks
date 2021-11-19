//match(): return path of RegExp to Array of string
const paragraph = 'TheGirl Fakesa Smile.';
const regex = /G[f-j](r)/g; // note in regular expression have path by find text in path and g is global flag
const found = paragraph.match(regex); // 
console.log(found); // Should return ["Gir"]

//matchAll(): 
const foundAll = paragraph.matchAll(regex);

//should print (2) ["Gir", "r", index: 3, input: "TheGirl Fakesa Smile.", groups: undefined].
Array.from(foundAll, (res) => console.log(res)); 