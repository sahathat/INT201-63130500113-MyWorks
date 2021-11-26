//localStorage no expire data
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

//sessionStorage expire data when close page and end session
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