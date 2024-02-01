//textfields

const gameTextField = document.getElementById("game-textfield");
const gameInputField = document.getElementById("game-input");

const gameIcon = document.getElementById("game-icon");

//stats

const playerStats = {
  red: document.getElementById("player-stats-red"),
  blue: document.getElementById("player-stats-blue"),
  green: document.getElementById("player-stats-green"),
};

const enemyStats = {
  red: document.getElementById("enemy-stats-red"),
  blue: document.getElementById("enemy-stats-blue"),
  green: document.getElementById("enemy-stats-green"),
};

//console object

const respond = {
  text: [],
  options: [],
};

//functions

const displayText = (inputString, target) => {
  target.innerHTML = `${inputString}`;
};

const write = (inputString, target) => {
  const letters = inputString.split("");

  console.log(letters);

  let respond = "";

  letters.forEach((letter, i) => {
    setTimeout(() => {
      respond += letter;
      console.log(respond);
      displayText(respond, target);
    }, i * 100);
  });
};

write("siemanko", gameTextField);
