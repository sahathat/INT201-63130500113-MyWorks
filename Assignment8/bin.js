import { carts } from "./searchProduct.js";

//สร้าง event เมื่อกดที่ bin เเล้ว จะมี alert เด้งขึ้นมาเเจ้งเตือนว่าจะทําการลบสินค้าออกจากตะกร้าหรือไม่
//ถ้าคลิกตกลงมันจะลบสินค้าทั้งหมดที่อยู่ในตะกร้าเเละเเสดงจํานวนสินค้าในตะกร้าเป็น 0
export function clearCart(){
    alert('click ok to clear all of carts')
    carts = {items: [], itemId: [], totalQty: 0};
    const amount = document.querySelector('#num');
    amount.textContent = 0;
    console.log(carts)
    //ให้มันไปลบ cookies ที่ชื่อ Cart เมื่อลบสินค้า
    CookieUtil.unset("Cart");
}