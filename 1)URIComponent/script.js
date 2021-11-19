// encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?/&")}`); //?x=test%3F%2F%26
// decodes characters such as ?,=,/,&,:
console.log(`?x=${decodeURIComponent("test%3F%2F%26")}`); //?x=test?/&

const url = "https://www.sit.kmutt.ac.th";
console.log(`encode: ${encodeURIComponent(url)}`); //encode: https%3A%2F%2Fwww.sit.kmutt.ac.th

console.log(`decode: ${decodeURIComponent("https%3A%2F%2Fwww.sit.kmutt.ac.th")}`); //decode: https://www.sit.kmutt.ac.th

const urlwikipedia = "https://th.wikipedia.org/wiki/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81"

console.log(`decode: ${decodeURIComponent(urlwikipedia)}`); //decode: https://th.wikipedia.org/wiki/หน้าหลัก

const queryComponent = "?q=search";
console.log(encodeURIComponent(queryComponent)); //"%3Fq%3Dsearch"
const urlEncodeQueryComponent = url + encodeURIComponent(queryComponent); 
const urlDecodeQueryComponent = url + decodeURIComponent(queryComponent); 
console.log(urlEncodeQueryComponent); //https://www.sit.kmutt.ac.th%3Fq%3Dsearch
console.log(urlDecodeQueryComponent); //https://www.sit.kmutt.ac.th?q=search