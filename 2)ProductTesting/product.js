let products = {
  id: 1001,
  name: "phone",
  desc: "nope",
  price: 555,
};

//1 find reference of node
const ProductSelector = document.querySelector("#products");
console.log(ProductSelector);
/* result is
<div id="products">
<!--show product here-->
<!-- <div id="P001">
  <p>Product Name: notebook</p>
  <p>Details: Dell Latitude 5550</p>
  <p>Price: 35000</p>
</div>
<div id="P002">
</div> -->
</div> 
*/

//2 create div of product // <div id="1001"></div>
const divProductElement = document.createElement("div");
divProductElement.setAttribute("id", products.id);
console.log(divProductElement.getAttribute('id')) // 1001

//3 create p of product
const pProductIdElement = document.createElement("p");
pProductIdElement.textContent = "Product id: " + products.id;

//4 append div block by child of <p>
divProductElement.appendChild(pProductIdElement);
console.log(divProductElement);
// result is
// <div id="products">
//  <p>Product id: 1001</p>
// </div>

//5 recursive product name,product desc,price
const pProductNameElement = document.createElement("p");
pProductNameElement.textContent = "Product name: " + products.name;
divProductElement.appendChild(pProductNameElement);

const pProductDescElement = document.createElement("p");
pProductDescElement.textContent = "Product description: " + products.desc;
divProductElement.appendChild(pProductDescElement);

const pProductPriceElement = document.createElement("p");
pProductPriceElement.textContent = "Price: " + products.price + " Baht";
divProductElement.appendChild(pProductPriceElement);

