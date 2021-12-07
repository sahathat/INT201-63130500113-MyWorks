
import { MyProduct } from "./modelProduct.js";
import { productListSelect } from "./view.js";
import { cart } from "./cart.js";

export function showProduct(product){
        let {id,name,price,image} = product
        //div card
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "card");
        productCard.setAttribute("style", "width: 18rem; padding: 10px");
        productCard.setAttribute("id", id);

        //img
        let productImg = document.createElement("img");
        productImg.setAttribute("src",image);
        productImg.setAttribute("alt",name)
        productImg.setAttribute("width","200px")
        productImg.setAttribute("height","200px")
        productImg.setAttribute("class","card-img-top");

        //div card body
        let productCardBody = document.createElement("div");
        productCardBody.setAttribute("class", "card-body");

        //name
        let productName = document.createElement("h6");
        productName.textContent = "Name: " + name;
        productName.setAttribute("class", "card-title");
        productName.setAttribute("style", "card")

        //price
        let productPrice = document.createElement("p");
        productPrice.textContent = "Price: " + price + " Bath";
        productPrice.setAttribute("class", "card-text");

        let addToCartButton = document.createElement("button")
        addToCartButton.setAttribute("class","btn btn-primary")
        addToCartButton.setAttribute("id",id);
        addToCartButton.textContent = "add to cart";
        addToCartButton.addEventListener('click', addToCart, false);

        //append child data structure element to card body element
        productCardBody.appendChild(productName);
        productCardBody.appendChild(productPrice);
        
        //append child group element of image and data to card element
        productCard.appendChild(productImg);
        productCard.appendChild(productCardBody);
        productCard.appendChild(addToCartButton)

        //append child card element to group element
        productListSelect.appendChild(productCard);
}

//search panel function
export function searchEnable() {
    const searchIconEle = document.querySelector('#nav #search-icon');
    const searchTextEle = document.querySelector('#nav div #search-text');
    const searchBtnEle = document.querySelector('#nav #search-btn');
  
    const searchBtnStyles = searchBtnEle.getAttribute('class');
    const searchTextStyle = searchTextEle.getAttribute('class');

    let isSearch = false;
    searchBtnEle.setAttribute('class', searchBtnStyles + ' invisible');
    searchTextEle.setAttribute('class', searchTextStyle + ' invisible');
    searchIconEle.addEventListener('click', () => {
      searchTextEle.value = '';
      isSearch = !isSearch;
      const show = isSearch ? ' visible' : ' invisible';
      searchBtnEle.setAttribute('class', searchBtnStyles + show);
      searchTextEle.setAttribute('class', searchTextStyle + show);
      searchTextEle.focus();
    });
    searchBtnEle.addEventListener('click', search);
}

export function search() {
    let searchText = document.querySelector('#nav div #search-text').value;

    let matchingProducts = MyProduct.filter(
        (product) => product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    productListSelect.textContent = '';

    matchingProducts.forEach(product => showProduct(product))
}

function addToCart(event) {
    alert(`${event.target.id} added in your cart`);
    cart.add({ productId: event.target.id, qty: 1 });
    const amount = document.querySelector('#nav #cart #amount');
    amount.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0);
}

export function clearCart() {
    cart.remove();
    const qtys = document.querySelector('#nav #cart #amount');
    qtys.textContent = 0; //cart.items.reduce((tot, item) => tot + item.qty, 0);
}