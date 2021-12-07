
import { searchEnable, search } from "./productController.js";
import { clearCart } from "./productController.js";
import { user, userBg } from "./filter.js";
import { cart } from "./cart.js";

//My Cart
const svgViewCart = document.querySelector("#nav #cart #view-cart");


const svgClearCart = document.querySelector("#nav #cart #clear-cart");
svgClearCart.addEventListener("click",clearCart,false);

//My product
export let productListSelect = document.getElementById("productList");
productListSelect.setAttribute("class","row row-cols-1 row-cols-sm-2 row-cols-md-4");

//list product
//loading user cart, user background, and list all products
window.addEventListener('load', (e) => {
    e.preventDefault();
    //loading username
    user.load();
    const userEle = document.querySelector('#header #filter #user #username');
    userEle.textContent = user.username;

    // //loading user background preference
    // userBg.load();
    // userBg.selectedBg === 'light'
    //   ? hiddenBgColor(pinkBg, blueBg)
    //   : hiddenBgColor(blueBg, pinkBg);
    // document.body.className = userBg.selectedBg;

    //loading user cart
    cart.load();
    const qtys = document.querySelector('#nav #cart #amount');
    qtys.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0);
  
    //show list of products
    searchEnable();
    search();
});