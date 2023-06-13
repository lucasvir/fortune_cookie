const fortuneTexts = [
  `Se alguém está tão cansado que não possa te dar um sorriso,
  deixa-lhe o teu.`,
  `A sorte afeta tudo. Deixe o seu anzol sempre lançado. No riacho onde menos esperar, haverá um peixe`,
  `Às vezes não conseguir o que você quer é uma tremenda sorte.`,
  ` Quando faltar sorte, faça sobrar atitude. O azar morre de medo de pessoas determinadas.`,
];

function getRandomPhrase(max) {
  return Math.floor(Math.random() * max);
}


function handleFortuneCookie() {
  const title = document.getElementById("title");
  title.innerText = "Aqui está a sua sorte de hoje:";

  const subtitle = document.getElementById("subtitle");
  subtitle.classList.add("hidden");

  const fortuneCard = document.getElementById("fortune-card");
  fortuneCard.classList.remove("hidden");

  const fortuneCardText = document.getElementById("fortune-card-text");
  fortuneCardText.innerText = fortuneTexts[getRandomPhrase(fortuneTexts.length)];

  const cookieImgClosed = document.getElementById("cookie-img-closed");
  cookieImgClosed.classList.add("hidden");
  const cookieImgOpen = document.getElementById("cookie-img-open");
  cookieImgOpen.classList.remove("hidden");

  const buttonNewCookie = document.getElementById("button-new-cookie");
  buttonNewCookie.classList.remove("hidden");

  return;
}

function handleNewCookie() {

  const fortuneCardText = document.getElementById("fortune-card-text");
  fortuneCardText.innerText =
    fortuneTexts[getRandomPhrase(fortuneTexts.length)];
}
