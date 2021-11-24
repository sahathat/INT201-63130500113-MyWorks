import {car} from "./carList.js";
import {showProduct} from "./showProduct.js";
import {CookieUtil} from "./cookies.js"
import { switchMode } from "./switchColor.js";
import { clearCart } from "./bin.js";

//สร้าง object ของ cart เก็บสินค้าที่เพิ่มเข้ามาในตะกร้า
export let carts = {items: [], itemId: [], totalQty: 0};

//เเสดงรายการสินค้าทั้งหมด
showProduct(car);

//เลือก div ที่มี id searchCart มาจากหน้า index
const divSearchCartEle = document.querySelector("#searchCart");

//สร้าง div(divSearch) span(spanSeachBar,spanCart)
//set attribute ให้กับ spanCart กําหนดใหไปอยู่ทางขวามือของเพจ
const divSearch =document.createElement("div")
const spanSeachBar =document.createElement("span")
const spanCart = document.createElement("span")
spanCart.setAttribute("style","float: right;")

//สร้าง img element ชื่อ colImg โดยกําหนดไอดีชื่อว่า theme
export const colImg = document.createElement("img")
colImg.setAttribute("id","theme")
colImg.setAttribute("src","image/dark.png")
colImg.setAttribute("height", 30);
colImg.setAttribute("width", 30);

//เพิ่ม event ให้กับ colImg เมื่อคลิกที่รูปภาพมันจะไปทํางานใน function swithmode
colImg.addEventListener('click', switchMode);


spanCart.appendChild(colImg)

//สร้าง image element ชื่อ searchIcon นํารูปมาใส่ กําหนดขนาดรูป
const searchIcon =document.createElement("img")
searchIcon.setAttribute("src","image/searchIcon.png")
searchIcon.setAttribute("height", 30);
searchIcon.setAttribute("width", 30);

//สร้าง image element ชื่อ cart นํารูปมาใส่ กําหนดขนาดรูป
const cart = document.createElement("img")
cart.setAttribute("src","image/cart.png")
cart.setAttribute("height", 35);
cart.setAttribute("width", 35);

//สร้าง span element ชื่อ amount ตกเเต่ง เเล้วกําหนดให้ตัวเลขสินค้าที่อยู่ในตะกร้า default = 0
const amount = document.createElement("span");
amount.setAttribute('id', 'num')
// amount.setAttribute('class', 'border border-2 fs-5');
amount.setAttribute('style', 'width: 10000px');
amount.textContent = ' 0 ';

//สร้าง image element ชื่อ bin นํารูปมาใส่ กําหนดขนาดรูป set attribute id
const bin = document.createElement("img")
bin.setAttribute("src","image/bin.png")
bin.setAttribute('id', 'clear')
bin.setAttribute("height", 35);
bin.setAttribute("width", 35);
bin.addEventListener('click', clearCart)

// appendChild ให้มัน
divSearch.appendChild(searchIcon);
divSearchCartEle.appendChild(divSearch);
divSearch.appendChild(spanSeachBar);
divSearch.appendChild(spanCart);
spanCart.appendChild(cart);
spanCart.appendChild(amount);
spanCart.appendChild(bin);

// เรียกใช้เมื่อกดที่ icon search มันจะเเสดงกล่องข้อความให้ input เเละ ปุ่ม button 

function showSearchBar(){
    const input =document.createElement("input")
    input.setAttribute("id","inputValue")
    input.setAttribute("type","text")

    const button =document.createElement("button")
    button.textContent = "Search";
    button.setAttribute("id","searchButton");
    //appendChild ให้มัน
    spanSeachBar.appendChild(input);
    spanSeachBar.appendChild(button);
}

//ประกาศตัวแปรชื่อว่า toggle ไว้ใช้เปิดปิด search bar
//และใส่ event ให้กับ searchIcon ไว้เช็คว่าเมื่อมีการกดที่ searchIcon ให้เปลี่ยนค่าตัวแปรของ toggle ให้เป็นไปตรงข้ามกับค่าเดิม
//เช่นถ้าก่อนหน่านี้ false ก็จะเปลี่ยนเป็น true แล้วจะทำการแสดง search bar ขึ้นมา
let toggle = false;
searchIcon.addEventListener('click', checkToggle);
function checkToggle() {
    toggle = !toggle ;
    if(toggle) {
        //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
        showSearchBar();

        //ตัวแปรชื่อว่า searchBtn ไว้ใช้สำหรับค้นหาสินค้าที่ได้รับมาจาก searchbar        
        //และเพิ่มดักจับ event ไว้จับเมื่อมีการกดเริ่ม search จะทำการหาชื่อของสินค้าที่คล้ายที่สุดที่ได้รับ input เข้ามา        
        //โดยใช้ RegExp ไว้ใช้ว่า pattern เหมือนกันไหม แล้ว filter item ที่ match กันออกมาแสดง

        const searchBtn = document.querySelector('#searchButton');
        searchBtn.addEventListener('click', () => {
            const value = document.querySelector('#inputValue').value;

            let pattern = new RegExp(value, 'i');
            console.log(pattern)

            const newSearch = car.filter((item) => {return item.carName.match(pattern) != null});
            console.log(newSearch)

            showProduct(newSearch);
        })

        const searchBar = document.querySelector('#inputValue');
        searchBar.addEventListener('keyup', () => {
            if(searchBar.value == '') {
                showProduct(car);
            }
        })

    } else {
        spanSeachBar.innerHTML = '';
    }
  }

//ถ้าในตะกร้าสินค้ามีสินค้าอยู่ ก็ไป get cookies ที่ชื่อ cart ออกมา
//ใช้ JASON.parse เพื่อเเปลงจาก text ไปเป็น javascript object 
//เเล้วนําไปเก็บไว้ในตัวเเปร carts ที่เก็บข้อมูลของสินค้าที่อยู่ในตะกร้า
//query ตัวเลขของสินค้าที่อยู่ในตะกร้าที่มี id ชื่อ num ออกมา เก็บในตัวเเปร quantity
//ไปดึงข้อมูล totalQuantity(จํานวนสินค้าทั้งหมดที่อยู่ในตะกร้า) มาเก็บ
if(CookieUtil.get("Cart")!=null){
    carts = JSON.parse(CookieUtil.get("Cart"));
    let quantity = document.querySelector("#num");
    quantity.textContent = carts.totalQty;
}

//ดึง value ที่อยู่ใน local storage ออกมา
let bgColor = localStorage.getItem("BG")
let fontColor = localStorage.getItem("fontColor")
let amountColor = localStorage.getItem("amountColor")
let theme = localStorage.getItem("theme")

//เอา value ที่ได้มาเปลี่ยนตามที่ user เลือกล่าสุด
document.body.style.backgroundColor = bgColor;
document.getElementById("h1").style.color = fontColor;
document.getElementById("num").style.color = amountColor;
document.getElementById("theme").src = theme;


