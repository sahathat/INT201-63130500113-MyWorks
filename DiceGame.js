

let dice = [1, 2, 3, 4, 5, 6];

let player1 = { name: "player1", diceValue : 0 , score: 0 , result : '' , diceHis: {diceValue: [], result: []}};

let player2 = { name: "player2", diceValue : 0 , score: 0 , result : '' , diceHis: {diceValue: [], result: []}};

function roll() {
  player1.diceValue = dice[Math.floor(Math.random() * dice.length)];
  player2.diceValue = dice[Math.floor(Math.random() * dice.length)];
}

function rollHis(i) {
    player1.diceHis.diceValue[i] = player1.diceValue;
    player2.diceHis.diceValue[i] = player2.diceValue;
    player1.diceHis.result[i] = player1.result;
    player2.diceHis.result[i] = player2.result;
}

function result() {
  if (player1.diceValue > player2.diceValue) {
    player1.result = 'win!';
    player2.result = 'lose!';
    player1.score += 1;
  } else if (player1.diceValue < player2.diceValue) {
    player2.result = 'win!';
    player1.result = 'lose!';
    player2.score += 1;
  } else {
    player1.result = 'draw!';
    player2.result = 'draw!';
  }
}

function total(){
    return player1.score > player2.score ? 'player1 win' : player2.score > player1.score ? 'player2 win' : 'draw game' ;
}

function play(game) {
  let i = 0;
  while (i < game) {
    console.log(`--- round ${i+1} ---`)
    roll();
    console.log('player1 dice value: ' + player1.diceValue)
    console.log('player2 dice value: ' + player2.diceValue)
    result();
    console.log('player1 result: ' + player1.result)
    console.log('player2 result: ' + player2.result)    
    console.log('player1 score: ' + player1.score)
    console.log('player2 score: ' + player2.score)
    rollHis(i)
    i++;
  }
  console.log('--- Endgame ---')
  console.log(total())
  console.log('--- history of dice value and result ---')
  console.log('player 1 dice value: ' + player1.diceHis.diceValue + ' result: ' + player1.diceHis.result)
  console.log('player 2 dice value: ' + player2.diceHis.diceValue + ' result: ' + player2.diceHis.result)
}

play(3);