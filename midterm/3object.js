// type of object
let customer = { id: 1, name: "Adam", job: ["Saleman", "Messenger", "Farmer"] };
let product = {
  id: 1000,
  name: "Notebook",
  amount: { price: 15000, quantity: 15 },
};

console.log(customer); // call object is customer
console.log(customer.id); // call property is id
console.log(customer.job[2]); // call Messenger in job

console.log(product); // call object is customer
console.log(product.name); // call product name
console.log(product.amount.price); // call price of product
console.log(product.amount["quantity"]); // call quantity of product

//mutable
obj1 = { id: 1, name: "Alice" };
obj2 = { id: 1, name: "Alice" };
obj3 = obj1;
obj3.id = 2;

console.log(obj1 == obj2); // false
console.log(obj1 == obj3); // true

// shorthand function
p1 = { x: 0, y: 0 }
p2 = { x: 3, y: 4 }

let line = {
  p1, p2,
  distance() {
    // **‐The exponentiation assignment operator
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
};

console.log(line.p1); // {x: 0, y: 0}
console.log(line.p2); // {x: 3, y: 4}
console.log(line.distance()); // 5

// object creation
let newobj = new Object()
let emply = {}

console.log(newobj == emply) // false

newobj.id = 113;
newobj.name = 'Benz'
console.log(newobj) // {id: 113, name: Benz}

