//Header
let HeaderElement = document.getElementById("hello");

console.log(HeaderElement)
//<h1 id="hello" style="color:red; border:1px solid">Hello Document Object Model</h1>

HeaderElement.setAttribute("style","color:red; border:1px solid")
HeaderElement.innerText = "Hello Document Object Model";

//Multi select list
let UnOrderListElement = document.getElementById("ul")
console.log(UnOrderListElement)
// <ul id="ul" style="@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&amp;display=swap');font-family: 'Roboto', sans-serif">
// <li class="li1" type="module">Hi</li>
// <li class="li2" type="module">Hi</li>
// <li class="li3" type="module">Hi</li>
// <li class="li4" type="module">Hi</li>
// <li class="li5" type="module">Hi</li>
// <li class="li6" type="module">Hi</li>        
// </ul>

//Node select list
let ListElement = UnOrderListElement.querySelectorAll("li")
console.log(ListElement)
//NodeList(6) [li.li1, li.li2, li.li3, li.li4, li.li5, li.li6]

UnOrderListElement.setAttribute("style","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');font-family: 'Roboto', sans-serif;color:red")

//Single select in list
let ListElement5 = document.querySelector("#ul .li5")

console.log(ListElement5)
//<li class="li5" type="module">Hi</li>

ListElement5.setAttribute("style","color:#0000FF")
ListElement5.textContent = "Hello";

//what is font attribute?
let pAnsEle = document.getElementById("ans-attr");
pAnsEle.setAttribute("style","border:red 2px dashed;font-size: 12px;font-weight:bold;@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');font-family: 'Roboto', sans-serif;color:blue;display:flex");

//My product

export let productListSelect = document.getElementById("productList");
productListSelect.setAttribute("class","row row-cols-1 row-cols-md-3 g-4");

import { MyProduct } from "./7.2Model.js";
import { productList } from "./7.1ProductList.js";

productList(MyProduct)