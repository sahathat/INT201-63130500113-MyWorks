//search(): find index of string by sensitive path pattern of regexp and return
let str = "the Soup Is Sour";
let re = /[A-Z]/g;
console.log(str.search(re)); //This should output 4

//apply match method
let list = [
  { id: 1, name: "cat" },
  { id: 2, name: "test" },
  { id: 3, name: "dog" },
];

// how to compare by match() and search()
let find = "t";
let regex = new RegExp(find, "i");

let match = list.filter((item) => {
  return item.name.match(regex) != null;
});
console.log(match); // [ { id: 1, name: 'cat' }, { id: 2, name: 'test' } ]

let search = [];
for (let i = 0; i < list.length; i++) {
  search.push(list[i].name.search(regex));
}
console.log(search); // [2,0,-1]
