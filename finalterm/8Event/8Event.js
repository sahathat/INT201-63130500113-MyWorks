//1. query target node

const okBtn = document.querySelector('#submit');
const divBtn = document.querySelector('#divButtonPanel')

console.log(okBtn);
//<button id="submit" type="submit" value="Submit Account">OK </button>

console.log(divBtn);
/* <div id="divButtonPanel" style="border: 1px solid purple;padding: 10px;">
        <button id="submit" type="submit" value="Submit Account">OK </button>
        <button id="cancel" type="button" value="Not Create Account">Cancel</button>
</div> */

//2. register event handler to target node
okBtn.onclick = showMessage1;

//3. prepare event handler
// use event type or parameter
function showMessage1(e1) {
    alert("Sm1 " + e1.target + ' ' + e1.currentTarget + ' ' + e1.eventPhase + ' ' + e1.type);
    console.log("massage1")
    console.log(e1.target); // [object HTMLButtonElement]
    console.log(e1.currentTarget); // [object HTMLDivElement]
    console.log(e1.eventPhase); // 2
    console.log(e1.type); // click
}

function showMessage2(e2) {
    alert("Sm2 " + e2.target + ' ' + e2.currentTarget + ' ' + e2.eventPhase + ' ' + e2.type);
    console.log("massage2")
    console.log(e1.target); // [object HTMLButtonElement]
    console.log(e1.currentTarget); // [object HTMLDivElement]
    console.log(e1.eventPhase); // 1
    console.log(e1.type); // click
}

// or
// 2. register event handler to target node and prepare event handler
okBtn.onclick = (e) => { alert("Nope " + e.type) } //show 4

// capturing pattern
// use addEvent listener
okBtn.addEventListener("click",showMessage1,false) //show5
okBtn.addEventListener("click",e1=>alert("m1"),true) //show 3
// okBtn.removeEventListener("click",showMessage1,true)
divBtn.addEventListener("click",e1=>alert("m2"),true) //show 1
divBtn.addEventListener("click",showMessage2,true) //show 2
