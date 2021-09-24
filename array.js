let [a1,b1]=[1,2]

let [a2,...b2]=[2,1,2,3]

console.log('Array A: ' + a1 + ' ' + b1);

console.log('Array B: ' + a2 + ' ' + b2);

(
    {obj1,obj2,...obj} = {
        obj2: 1,
        obj1: 2,
        obj3: 3,
        obj4: 4
    }
);
// let {obj1,obj2,...obj} = {a:1,b:2,c:3,d:4} result 'Object:undefined undefined [object Object]'
console.log('Object: ' + obj1 + ' ' + obj2 + ' ' + obj);
console.log(obj);

(
    { productId, productName, ...rest } = {
    productName: 'Coke',
    productId: 111,
    productPrice: 10,
    productStock: 5
    }
);
  
console.log(productId);
console.log(productName);
console.log(rest);
rest.productPrice = 200;
console.log(rest);

