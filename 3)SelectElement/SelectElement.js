// ให้นักศึกษาแต่ละกลุ่มเขียน JavaScript เพื่อ

//Group2 sec3
//1. เข้าถึง li element ที่เป็น group ของตนเอง และเป็น section 3
const Sec3Group2 = document.querySelector("#Section3 .group2"); // เข้าหา query ที่เป็น attribute class ชื่อ Section3 และเข้าหา attribute id ชื่อ group2
const Sec3Group1 = document.querySelector("#Section1 > ul > .group1");
const Sec2 = document.getElementById('Section2')

//2. get ค่า attribute ที่ชื่อ class
const value2 = Sec3Group2.getAttribute("class"); // call html class name
const value1 = Sec3Group1.getAttribute("id"); // call html id name
const nameSec2 = Sec2.getAttribute("id");

//3. เพิ่ม text ในข้อ 2 และ text ที่เป็นคำนิยามของกลุ่มใน element ข้อ 1
Sec3Group2.textContent = value2 + "<h1> are Ok</h1>"; // group2 are OK. return message text
Sec3Group1.innerHTML = value1 + " <h1> are InnerHTML</h1>"; // null are InnerHTML. return element of HTML statement
Sec2.innerText = nameSec2 + " <style>let i = 0; if(i<0) ? I found it : Not found</style>"; // Section2 I found it. return message text

// reference
// https://stackoverflow.com/questions/19030742/difference-between-innertext-innerhtml-and-value