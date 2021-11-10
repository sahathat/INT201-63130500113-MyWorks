//1. query target node

const okBtn = document.querySelector('#submitOK');
const divBtn = document.querySelector('#divButtonPanel')

console.log(okBtn);

//2. register event handler to target node
okBtn.onclick = showMessage1;


//3. prepare event handler
// use event parameter
function showMessage1(e1) {
    alert("Sm1 " + e1.target + ' ' + e1.currentTarget + ' ' + e1.eventPhase + ' ' + e1.type);
}

function showMessage2(e2) {
    alert("Sm2 " + e2.target + ' ' + e2.currentTarget + ' ' + e2.eventPhase + ' ' + e2.type);
}

// or
// 2. register event handler to target node and prepare event handler
okBtn.onclick = (e) => { alert("Nope" + e.type) }

// use addEvent listener
okBtn.addEventListener("click",showMessage1,false)
okBtn.addEventListener("click",e1=>alert("m1 " + e1.target + ' ' + e1.currentTarget + ' ' + e1.eventPhase + ' ' + e1.type),true) //show first
// okBtn.removeEventListener("click2",showMessage1,true)
divBtn.addEventListener("click",e1=>alert("m1 " + e1.target + ' ' + e1.currentTarget + ' ' + e1.eventPhase + ' ' + e1.type),true) //show first
divBtn.addEventListener("click",showMessage2,true) //show first
