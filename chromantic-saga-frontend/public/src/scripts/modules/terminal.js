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

const renderResponse = async (response, target) => {
  target.innerHTML = "";
  for (let sentenceObject of response.text) {
    const newParagraph = document.createElement("span");
    newParagraph.className = `text-${sentenceObject.color}`;
    target.appendChild(newParagraph);

    await write(sentenceObject.sentence, newParagraph);
  }
  response.options.forEach((option) => {
    const newParagraph = document.createElement("p");
    newParagraph.className = `text-option`;
    target.appendChild(newParagraph);

    write(`↪${option}`, newParagraph);
  });
};

export { displayText, write, renderResponse };
