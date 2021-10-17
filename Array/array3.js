// every เช็คเงื่อนไขว่าตรงกับค่าความจริงของทุกค่าใน function หรือไม่ ถ้าใช่ ให้ return true นอกนั้นเป็น false
// example 1 Basic
function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// example 2 use 2 Array of parameter
function isSubset(set, subset) {
    // returns true if subset is a subset of set
    return subset.every(function (element) {
      return set.includes(element);
    });
}
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// example 3 Arrow function
console.log([12, 5, 8, 130, 44].every(x => x >= 10));   // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true

//---------------------------------------------------------------------------

// indexOf
// example 1
var array = [2, 9, 9];
console.log(array.indexOf(2));     // 0
console.log(array.indexOf(7));     // -1
console.log(array.indexOf(9, 2));  // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0

// example 2
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}
var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.