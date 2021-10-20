//export
export const frontEndFramework=['Vuejs','React','Angular']
export function greeting(){
    return 'Hello,function from another module'
}
//default export
export default function getInstructor(){
    return `Umaporn Supasitthimethee`;
}
const subject='INT201'
export {subject}

//การ export สามารถ export ทั้ง function variable และ class ซึ่งจะต้อง import ในไฟล์อื่น ๆ ก่อน
//แล้วทดสอบตัวแปรผ่าน html ด้วย module บน http ในไฟล์อื่นๆ ด้วย live server extension