console.log("This is my source code answer for 1.1");

export let productCart = document.querySelector("#buying-list")

export let cart = {
  //1.2.1
  items: [],
  //

  //1.2.3
  doneitems: [],
  //

  //1.2.1
  pending: function (product) {
    let foundIndex = -1;

    let inputText = document.querySelector("#item").value;
    let inputQty = document.querySelector("#qty").value;

    foundIndex = cart.items.findIndex(
      (item) => item.productName === product.productName
    );

    if (foundIndex === -1) {
      productCart.textContent = "";
      cart.items.push({ productName: inputText, qty: Number(inputQty) });
    } else {
      productCart.textContent = "";
      cart.items[foundIndex].qty += Number(inputQty);
    }
    console.log(cart.items)
    this.save(); //1.2.4
  },
  //

  //1.2.3
  done: function (product,event) {
    console.log("This is my source code answer for 1.2.3");
    let foundIndex = -1;

    console.log(event.target.id.substr(2,1)-1)

    foundIndex = cart.doneitems.findIndex(
      (item) => item.productName === product.productName
    );

    if(event.target.id.substr(2,1)-1!==foundIndex){
      cart.doneitems.push({ productName: this.items[event.target.id.substr(2,1)-1].productName, qty: this.items[event.target.id.substr(2,1)-1].qty });
      console.log("here")
    }

    this.save(); //1.2.4
    console.log("End of my answer");
  },
  //

  //1.2.4
  save: function () {
    localStorage.setItem("pending", JSON.stringify(cart.items));
    localStorage.setItem("done", JSON.stringify(cart.doneitems));
  },
  //

  //1.2.2
  remove: function () {
    if (confirm("Empty cart")) {
      cart.items = [];
      localStorage.removeItem("pending"); //1.2.4
      localStorage.removeItem("done"); //1.2.4
      const pending = document.querySelector("#countPendingItems");
      pending.textContent = 0;
      const done = document.querySelector("#countDoneItems");
      done.textContent = 0;
      productCart.textContent = "";
    }
  },
  //
};
console.log("End of my answer");
