//add testing true
let std1 = {id:1,name:"stu"};
let std2 = {id:1,name:"stu"};

console.log(std1===std2) // false

std1=std2

std2.id = 2
std1.name = "sup"
console.log(std1===std2) // true

function dosomething(student) {
    student.id=63130500111
}
let std3 = {id: 3, name:'joe'}
dosomething(std3)
console.log(std3)

function todosomething(num) {
    num=111
    console.log(num)
}
var num3 = 1
todosomething(num3)
console.log(num3)

//3. Shallow Equality
let book1 = {isbn: 123456789,title: "JavaScript",};
let book2 = {isbn: 123456789,title: "JavaScript",};

function shallowEquality(object1, object2){
    const keys1=Object.keys(object1);
    const keys2=Object.keys(object2);
    if(keys1.length !== keys2.length){
        return false;
    }
    for(let key of keys1){
        if(object1[key] !== object2[key] ){
            return false;
        }
    }
    return true;
}

console.log("shallow equality: " + shallowEquality(book1, book2)); //true

let arr1 = [
    1,
    2,
    true,
    "four",
    [5,"six"],
    {seven:7,eight:'eight'},
    {nineten:
        [9,
            'ten',true,
        {"11":"eleven","twelve":12}
    ]}]

console.log(arr1)

let arr2 = [10, 'in progress', true, 1];

console.log(arr2[0]); // [integer expression]

console.log(arr2.length);

console.log( arr2 [ arr2[ arr2.length-1 ] ] );

let arr3 = arr2
arr2[3]=3
console.log(arr3 [ arr3[ arr3.length-1 ] ] );

let arr11 = [1, 2, 3, 4];

let arr21 = arr11;

arr21[1] = 999;

console.log(arr11); //[ 1, 999, 3, 4 ]

function doSomething(temp) {
  //temp=arr
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i] * 2;
  }
}

doSomething(arr11);

console.log(arr11);
//[2,1998,6,8]

//ต้องการเข้าถึง element สุดท้ายของ nested array มิติที่ 2 ตัวสุดท้าย
//array of array
let colors = [
    ['pink','red'],
    ['yellow','orange','brown']
]

console.log(colors[0][colors[0].length-1])
console.log(colors[1][colors[1].length-1])

// array of object
let students = [
    {id:1 , name:"test"},
    {id:2 , name:"lol"}
]

console.log(students[students.length-1])
students[students.length-1].name = "sahathat"
console.log(students[students.length-1])

// spreading operator
let num1 = [1,...arr21,9]
console.log(`num1 = ${num1}, num1.length = ${num1.length}`)

let num2 = [1,...colors,...students]
num2[2] = "sat"
num2[3] = "ok"
num2[4].id = "two"
console.log(`num2 = ${num2}, num2.length = ${num2.length}`)


// constucture
let arrCon = new Array(1,2,3) ;
console.log(arrCon)

// array of and array form
let arrOf = Array.of(1,2,3,4,...arrCon)
console.log(arrOf)

let arrFrom = Array.from(arrOf);
console.log(arrOf)
console.log(arrFrom)

console.log(arrFrom == arrOf) //false