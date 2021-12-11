import {cart, productCart} from "./cart.js"

//1.2.1
export function showProduct(){
    //ordered list
    let productList = document.createElement("ol");
    for(let i in cart.items){
        //list
        let productDesc = document.createElement("li");
        productDesc.id = "no" +String(Number(i)+1);
        productDesc.className = "pending"
        productDesc.innerHTML = " Name: " + cart.items[i].productName + ",Qty: " + cart.items[i].qty + " Units " + '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.65,19.35l-2.15-2.15V14h1v2.79l1.85,1.85 L18.65,19.35z M18,3h-3.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H6C4.9,3,4,3.9,4,5v15c0,1.1,0.9,2,2,2h6.11 c-0.59-0.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c0.71,0.1,1.38,0.31,2,0.6V5C20,3.9,19.1,3,18,3z M12,5c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C13,4.55,12.55,5,12,5z"/></g></svg>'

        //1.2.3
        productDesc.addEventListener('click',done)

        //append child product description on product list
        productList.appendChild(productDesc);

        //append child product list on product cart
        productCart.appendChild(productList);
    }
}
//

//1.2.1
export function addToCart() {
    //add to cart
    let inputText = document.querySelector("#item").value;
    let inputQty = document.querySelector("#qty").value;
    alert(`${inputText} added in your cart`);
    cart.pending({productName: inputText, qty: Number(inputQty)});

    //count pending
    const pending = document.querySelector('#countPendingItems');
    pending.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0);

    //show product
    showProduct()
}
//

//1.2.2
export function clearCart() {
    cart.remove();
}
//

//1.2.3
export function done(event) {
    let pendingImg = document.querySelector("#"+event.target.id);
    pendingImg.innerHTML = " Name: " + cart.items[pendingImg.id.substr(2,1)-1].productName + ",Qty: " + cart.items[pendingImg.id.substr(2,1)-1].qty + " Units " + '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>';
    pendingImg.setAttribute("style","text-decoration: line-through; color:grey");
    pendingImg.className = "done"

    cart.done({productName: cart.items[pendingImg.id.substr(2,1)-1].productName, qty: cart.items[pendingImg.id.substr(2,1)-1].qty},event);

    //count done
    const done = document.querySelector('#countDoneItems');
    done.textContent = cart.doneitems.reduce((tot,item) => tot + item.qty,0);

    //count pending after done
    const pending = document.querySelector('#countPendingItems');
    pending.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0)-cart.doneitems.reduce((tot,item) => tot + item.qty,0);

    // cart.done();
}
//