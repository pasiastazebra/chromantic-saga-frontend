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

const isOdd = (number) => number % 2 !== 0;

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
      let respondToSend = respond;
      console.log(i);
      if (isOdd(i) & (i !== letters.length - 1)) {
        respondToSend += "▮";
      } else if (i !== letters.length - 1) {
        respondToSend += "▯";
      }
      console.log(respond);
      console.log(respondToSend);
      displayText(respondToSend, target);
    }, i * 100);
  });
};

write("siemanko", gameTextField);

gameInputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    console.log("enter pressed");

    write(this.value, gameTextField);
    this.value = "";
  }
});
