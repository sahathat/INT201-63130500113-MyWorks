import {CookieUtil} from "./Cookie.js";

//set cookies
CookieUtil.set("book", "JavaScript Beginner");
CookieUtil.set("hobby", ["reading","gaming","programming"], new Date("January 1, 2022"));

// alert(`CookieUtil.get("name")#1: ${CookieUtil.get("name")}`); // "Sahathat"
// alert(`CookieUtil.get("book")#1: ${CookieUtil.get("book")}`); // "JavaScript%20Beginner"
// alert(`CookieUtil.get("hobby")#1: ${CookieUtil.get("hobby")}`); // "reading%2Cgaming%2Cprogramming"

//overwrite cookies
CookieUtil.set("book", "JavaScript Tutorial"); //overwrite because same path and name
//alert(`CookieUtil.get("book")#2: ${CookieUtil.get("book")}`); // "JavaScript%20Tutorial"

CookieUtil.set("hobby2", "shopping", new Date("December 10, 2021")); //overwrite and change an expiration date
//alert(`CookieUtil.get("hobby")#2: ${CookieUtil.get("hobby2")}`); //shopping

// remove the cookies
// CookieUtil.unset("name");
// CookieUtil.unset('hobby2');

//cookie: expire when set out of date by default is session date
let cookieVisit = CookieUtil.get('cookieVisit');
if (cookieVisit === null) {
    CookieUtil.set('cookieVisit', 1, new Date(0));
} else {
    CookieUtil.set('cookieVisit', ++cookieVisit);
}

let pCookie = document.getElementById("cookie")
alert(`visit (cookie): ${CookieUtil.get('cookieVisit')}`);
CookieUtil.set("name", "Sahathat");
pCookie.textContent=cookieVisit

//localStorage: no expire data
let localVisit = localStorage.getItem('localStorageVisit');
if (localVisit === null) {
  localStorage.setItem('localStorageVisit', 1);
} else {
  localStorage.setItem('localStorageVisit', ++localVisit);
}

let pLocal = document.getElementById("local")
alert(`visit (local storage): ${localStorage.getItem('localStorageVisit')}`);
localStorage.setItem('bgcolor', 'red');
pLocal.textContent=localVisit

// localStorage.clear();
// localStorage.removeItem('bgcolor');

//sessionStorage: expire data when close page and end session
let sessionVisit = sessionStorage.getItem('sessionStorageVisit');
if (sessionVisit === null) {
  sessionStorage.setItem('sessionStorageVisit', 1);
} else {
  sessionStorage.setItem('sessionStorageVisit', ++sessionVisit);
}

let pSession = document.getElementById("session")
alert(
  `visit (session storage): ${sessionStorage.getItem('sessionStorageVisit')}`
);
sessionStorage.setItem('programming language', ['C','Java','JS','PHP','C#','C++']);
pSession.textContent=sessionVisit