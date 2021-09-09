// Random Numbers
function getRandomNum(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + 1);
};

function getRandomNum2(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + 1);
};

// Left Dice
let randomNumber1 = getRandomNum(1, 7);

let changeLeftDice = document.querySelector(".img1");
changeLeftDice.setAttribute('src', `images/dice${randomNumber1}.png`);

// Right Dice
let randomNumber2 = getRandomNum2(1, 7);

let changeRightDice = document.querySelector(".img2");
changeRightDice.setAttribute('src', `images/dice${randomNumber2}.png`);

// H1
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎉 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🎉";
} else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "🎉 It's A Tie! 🎉";
};
