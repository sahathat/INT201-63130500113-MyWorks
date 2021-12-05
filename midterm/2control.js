
//use ternary conditional
function grade(score) {
    return score>=80? 'A' : score>=75 ? 'B+' :
    score>=70 ? 'B' : score>=65 ? 'C+' :
    score>=60 ? 'C' : score>=55 ? 'D+' :
    score>=50 ? 'D' : 'F'
}

console.log(grade(56.7)) // D+
console.log(grade(76.7)) // B+
console.log(grade(80)) // A

//use profession array

function upgrade(score) {
    return  ['A','B+','B','C+','C','D+','D','F'] [
    score>=80 ? 0 : score>=75 ? 1 :
    score>=70 ? 2 : score>=65 ? 3 :
    score>=60 ? 4 : score>=55 ? 5 :
    score>=50 ? 6 : 7
]
    
}

let rand = Math.floor(Math.random()*100) + 1 // random between 1-100 by random=(0,1) floor(random*100)=(0,99)

console.log(rand + ' ' + upgrade(rand))

// use switch case
function Numgrade(score) {
    score=Number(score)
    return score>=80? 1 : score>=75 ? 2 :
    score>=70 ? 3 : score>=65 ? 4 :
    score>=60 ? 5 : score>=55 ? 6 :
    score>=50 ? 7 : 8
} // conversion to switch of number

switch(Numgrade(rand)) {
    case 1:
        console.log('A')
        break
    case 2:
        console.log('B+')
        break
    case 3:
        console.log('B')
        break
    case 4:
        console.log('C')
        break
    case 5:
        console.log('C+')
        break
    case 6:
        console.log('D+')
        break
    case 7:
        console.log('D')
        break
    case 8:
        console.log('F')
        break
    default:
        console.log('Please insert between 0-100')
        break
}

// while loop 
let i1 = 1
let sum1 = 0
let d1 = 2
let i = 0
while(i < 10){
    sum1 += i1
    i1+=d1
    i++;
}
console.log(sum1) // 100

// for loop
i1 = 1
sum1 = 0
for(let i=0;i< 10;i++){
    sum1 += i1
    i1+=d1
}
console.log(sum1) // 100

// for in loop vs for of loop
inobj = {a:1,b:2}
for(i in inobj){
    console.log(i) // a b
    console.log(inobj[i]) // 1 2
}

ofarr = [1,2]
for(i of ofarr){
    console.log(i) // 1 2
}