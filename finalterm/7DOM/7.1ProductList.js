
import { productListSelect } from "./7DOM.js";

export function productList(product){
    for(let i in product){
        //div card
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "card");
        productCard.setAttribute("style", "width: 18rem");
        productCard.setAttribute("id", product[i].id);

        //img
        let productImg = document.createElement("img");
        productImg.setAttribute("src",product[i].image);
        productImg.setAttribute("alt",product[i].name)
        productImg.setAttribute("width","200px")
        productImg.setAttribute("height","200px")
        productImg.setAttribute("class","card-img-top");

        //div card body
        let productCardBody = document.createElement("div");
        productCardBody.setAttribute("class", "card-body");

        //name
        let productName = document.createElement("h6");
        productName.textContent = "Name: " + product[i].name;
        productName.setAttribute("class", "card-title");
        productName.setAttribute("style", "card")

        //price
        let productPrice = document.createElement("p");
        productPrice.textContent = "Price: " + product[i].price + " Bath";
        productPrice.setAttribute("class", "card-text");

        //append child data structure element to card body element
        productCardBody.appendChild(productName);
        productCardBody.appendChild(productPrice);
        
        //append child group element of image and data to card element
        productCard.appendChild(productImg);
        productCard.appendChild(productCardBody);

        //append child card element to group element
        productListSelect.appendChild(productCard);
    }
}