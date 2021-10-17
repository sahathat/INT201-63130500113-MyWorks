// splice(start, deleteCount, item1, item2, itemN)

// splice (insert)
let num = [1,2,3]
num.splice(2,0,4)
console.log(num) // [1,2,4,3]

//---------------------------------------------------------------------------

// splice (replace)
num.splice(1,1,5,6)
console.log(num) // [1,5,6,4,3]
num.splice(1,2,7)
console.log(num) // [1,7,4,3]

//---------------------------------------------------------------------------

// splice (delete)
num.splice(0,3)
console.log(num) // [3]