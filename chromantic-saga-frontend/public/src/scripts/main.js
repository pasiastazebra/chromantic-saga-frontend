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

const testRespond = {
  text: [
    {
      sentence: "Hejka! To jest kolor ",
      color: "white",
    },
    {
      sentence: "czerwony ",
      color: "red",
    },
    {
      sentence: "a to ",
      color: "white",
    },
    {
      sentence: "niebieski! ",
      color: "blue",
    },
    {
      sentence: "Zielony. ",
      color: "green",
    },
    {
      sentence: "Żółty! ",
      color: "yellow",
    },
    {
      sentence:
        "Qui eiusmod reprehenderit occaecat cupidatat qui ut anim sit qui laborum id eu sint. Deserunt laboris ullamco anim deserunt et magna voluptate eiusmod qui cillum ullamco Lorem aute. Sunt in ut id aliqua occaecat dolor. Adipisicing irure nostrud excepteur ex. Mollit in anim occaecat pariatur. Id do laboris nostrud et sint magna mollit enim nulla fugiat non proident deserunt Lorem.",
      color: "white",
    },
  ],
  options: ["Opcja 1;", "Opcja 2;", "Opcja 3;"],
};
//functions

const isOdd = (number) => number % 2 !== 0;

const displayText = (inputString, target) => {
  target.innerHTML = `${inputString}`;
};

const write = (inputString, target) => {
  return new Promise((resolve) => {
    const letters = inputString.split("");
    let respond = "";

    letters.forEach((letter, i) => {
      setTimeout(() => {
        respond += letter;
        let respondToSend = respond;
        if (isOdd(i) & (i !== letters.length - 1)) {
          respondToSend += "▮";
        } else if (i !== letters.length - 1) {
          respondToSend += "▯";
        }
        displayText(respondToSend, target);
        if (i === letters.length - 1) resolve();
      }, i * 50);
    });
  });
};

const renderResponse = async (response) => {
  gameTextField.innerHTML = "";
  for (let sentenceObject of response.text) {
    const newParagraph = document.createElement("span");
    newParagraph.className = `text-${sentenceObject.color}`;
    gameTextField.appendChild(newParagraph);

    await write(sentenceObject.sentence, newParagraph);
  }
  response.options.forEach((option) => {
    const newParagraph = document.createElement("p");
    newParagraph.className = `text-option`;
    gameTextField.appendChild(newParagraph);

    write(`↪${option}`, newParagraph);
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
