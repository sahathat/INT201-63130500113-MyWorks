//1 random

let number = [0,0,0]

function randomnum(){
    number1 = Math.floor(Math.random(1,100) * 100) + 1;
    number2 = Math.floor(Math.random(1,100) * 100) + 1;
    number3 = Math.floor(Math.random(1,100) * 100) + 1;
    number = [number1,number2,number3];
}

randomnum()
console.log(number[0] + ' ' + number[1] +' '+ number[2]);

//2 find sum min max

function sum(number){
    let sum = 0;
    let i = 0 ;
    while( i<number.length ){
        sum += number[i];
        i++;
    }
    return sum;
}

console.log(sum(number));
console.log(min(number));
console.log(max(number));

function min(number){
    let min = 0;
    for(i=0 ; i<number.length-1 ; i++ ){
        if(number[i]>number[i+1]){
            min = number[i+1];
        }else if(number[i]<=number[i+1]){
            min = number[i];
        }
    }
    return min;
}

function max(number){
    let max = 0;
    for(i=0 ; i<number.length-1 ; i++ ){
        if(number[i]<number[i+1]){
            max = number[i+1];
        }else if(number[i]>=number[i+1]){
            max = number[i];
        }
    }
    return max;
}