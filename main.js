var game = new Game();

var chooseClassicGame = document.querySelector(".classic-choice-box");
var chooseMythicalGame = document.querySelector(".mythical-choice-box");
var chosenFightersContainer = document.querySelector(".chosen-fighters-container");
var changeGameButton = document.querySelector(".change-game-btn");
var gameTypes = document.querySelector(".game-types");
var classicFightersContainer = document.querySelector(".c-fighters");
var mythicalFightersContainer = document.querySelector(".d-fighters");
var subheader = document.querySelector(".subheader")
var personScore = document.querySelector("#personScore")
var computerScore = document.querySelector("#computerScore")

chooseClassicGame.addEventListener("click", showClassicGame);
classicFightersContainer.addEventListener("click", function(event) {
  selectFighter(event)
});
chooseMythicalGame.addEventListener("click", showMythicalGame)
mythicalFightersContainer.addEventListener("click", function(event) {
  selectFighter(event)
});
changeGameButton.addEventListener("click", changeGame)

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function showGameBoard() {
  hide(gameTypes)
  subheader.innerText = `Choose your fighter!`
};

function showClassicGame() {
  game.gameType = "classic"
  show(classicFightersContainer);
  showGameBoard();
};

function showMythicalGame() {
  game.gameType = "mythical"
  show(mythicalFightersContainer);
  showGameBoard();
};

function selectFighter(event) {
  var personFighter = event.target.id;
  if (event.target.id) {
    game.person.fighter = personFighter;
    randomizeComputerFighter();
    showWinner();
    return personFighter
  }
};

function randomizeComputerFighter() {
  if (game.gameType === "classic") {
    game.computer.fighter = game.classicFighters[Math.floor(Math.random()
      * game.classicFighters.length)];
    return game.computer.fighter
  } else if (game.gameType === "mythical") {
    game.computer.fighter = game.mythicalFighters[Math.floor(Math.random()
      * game.mythicalFighters.length)];
    return game.computer.fighter
  }
};

function showWinner() {
  hide(gameTypes);
  hide(classicFightersContainer);
  hide(mythicalFightersContainer);
  show(chosenFightersContainer);
  show(changeGameButton);
  chosenFightersContainer.innerHTML = `
  <section class="fighters">
    <img src="assets/${game.person.fighter}.png" id="${game.person.fighter}"
      alt="${game.person.fighter}" width="200" height="200">
    <img src="assets/${game.computer.fighter}.png" id="${game.computer.fighter}"
      alt="${game.computer.fighter}" width="200" height="200">
  </section>`
  game.determineWinner();
  setTimeout(resetGameBoard, 1000);
};

function resetGameBoard() {
  show(gameTypes);
  hide(chosenFightersContainer);
  if (game.gameType === "classic") {
    hide(mythicalFightersContainer)
    showClassicGame()
  } else if (game.gameType === "mythical") {
    hide(classicFightersContainer)
    showMythicalGame()
  }
};

function changeGame() {
  show(gameTypes);
  game.gameType = "";
  clearTimeout(setTimeout(resetGameBoard, 1000));
  show(changeGameButton);
  hide(chosenFightersContainer);
  hide(classicFightersContainer);
  hide(mythicalFightersContainer);
  subheader.innerText = `Choose Your Game!`
};
