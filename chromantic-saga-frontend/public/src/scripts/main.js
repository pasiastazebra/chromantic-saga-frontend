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

//functions

const updateTextField = (text) => {
  gameTextField.innerHTML = text;
};

const updatePlayerStats = (red, blue, green) => {
  playerStats.red.innerHTML = red;
  playerStats.blue.innerHTML = blue;
  playerStats.green.innerHTML = green;
};

const updateEnemyStats = (red, blue, green) => {
  enemyStats.blue.innerHTML = blue;
  enemyStats.red.innerHTML = red;
  enemyStats.green.innerHTML = green;
};

const takeInputValue = () => {
  return gameInputField.value;
};

const createArray = (input) => {
  return input.split("");
};

const createString = (string, array) => {
  const letter = array.shift();

  string += letter;

  return { newString: string, newArray: array };
};

//S -> Si -> Sie -> Siem -> Siema -> Sieman -> Siemank -> Siemanko

gameInputField.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
  }
});
