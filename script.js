const responses = [
  { text: "It is certain.", image: "imgs/it is certain.webp" },
  { text: "Reply hazy, try again.", image: "imgs/hazy.jpg" },
  { text: "Don't count on it.", image: "imgs/dont count on it.jpg" },
  { text: "Yes, definitely.", image: "imgs/yes,definitely.jpg" },
  { text: "Ask again later.", image: "imgs/ask again later.jpg" },
  { text: "My reply is no.", image: "imgs/no.jpg" },
  { text: "Signs point to yes.", image: "imgs/yes.jpg" },
  { text: "Outlook not so good.", image: "imgs/not so good.jpg" },
];

document.getElementById("ask-button").addEventListener("click", function () {
  const questionInput = document.getElementById("question").value.trim();
  const responseElement = document.getElementById("response");
  const imageElement = document.getElementById("response-image");
  const magicBall = document.getElementById("magic-ball");

  if (!questionInput) {
    responseElement.textContent = "Please ask a question!";
    imageElement.src = "images/question.png";
    imageElement.hidden = false;
    return;
  }

  const randomIndex = Math.floor(Math.random() * responses.length);
  const randomResponse = responses[randomIndex];

  responseElement.textContent = randomResponse.text;
  imageElement.src = randomResponse.image;
  imageElement.hidden = false;

  magicBall.classList.add("shake");
  setTimeout(() => magicBall.classList.remove("shake"), 500);
});
