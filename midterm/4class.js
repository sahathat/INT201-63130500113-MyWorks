class Person{
    constructor(id,name,weight,height){
        this._id = id;
        this._name = name;
        this._weight = weight;
        this._height = height;
    }
    get personal(){
        return `${this._id}:${this._name}`;
    }
    get weight(){
        return this._weight
    }
    get height(){
        return this._height
    }
    set weight(weight){
        this._weight = weight
    }
    set height(height){
        this._height = height
    }
}

// recreate prototype
Person.prototype.getBMI = function () {
    return this._weight/(this._height**2)
}

//create object
let person1 = new Person(1,'Alice',45,1.67)
let person2 = new Person(2,'Bob',67,1.71)

console.log(person1) // JSON object of person1
console.log(person1.personal) // return `${this._id}:${this._name}`;

console.log(person2.height) // return this._height
console.log(person2.getBMI()) // return this._height/(this._weight**2)

person2.height = 1.69 // set this._height by height
console.log(person2.height) // return this._height
console.log(person2.getBMI()) // return this._height/(this._weight**2)

// Object create
let checkPerson2 = Object.create(person2)
checkPerson2.status = function() {
    return this._weight/(this._height**2) > 23 ? 'fat' : 'normal'
}
console.log(checkPerson2.status()) // check status of person2
console.log(Object.prototype.isPrototypeOf(checkPerson2)) // true
console.log(Object.prototype.isPrototypeOf(person2)) // true
console.log(Object.prototype.isPrototypeOf(person1)) // true