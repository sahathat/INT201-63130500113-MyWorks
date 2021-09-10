
let adminPlayer = Object.create(player1);
adminPlayer.level = 'super';

console.log(`${adminPlayer.id}, ${adminPlayer.name} , ${adminPlayer.level} `)

class Dice {

    constructor (gameTitle){
        this._gameTitle = (gameTitle != undefined) ? gameTitle : "Unknown";
        this._faceValue=0;
    }

    roll() {
        this._faceValue = Math.floor(Math.random()*6)+1
        return this._faceValue;
    }

    get gameTitle() {
        return this._gameTitle;
    }

    get faceValue() {
        return this._faceValue;
    }

    set faceValue(faceValue) {
        this._faceValue=faceValue;
    }
}

Dice.prototype.toString = function(){
    return `game : ${this.faceValue} , faceValue : ${this.gameTitle}`;
};
// call object

let dice1 = new Dice();
console.log(dice1.roll());
console.log(dice1.gameTitle);
console.log(dice1.faceValue);
dice1.diceValue = 6;
console.log(dice1.faceValue);
console.log(dice1.toString());

let dice2 = new Dice("LOL");
console.log(dice2.roll());
console.log(dice2.gameTitle);
console.log(dice2.faceValue);
dice1.diceValue = 1;
console.log(dice2.faceValue);
console.log(dice2.toString());



