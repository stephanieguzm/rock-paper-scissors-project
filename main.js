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
  selectClassicFighter(event)
});
chooseMythicalGame.addEventListener("click", showMythicalGame)
mythicalFightersContainer.addEventListener("click", function(event) {
  selectMythicalFighter(event)
});
changeGameButton.addEventListener("click", changeGame)

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function showClassicGame() {
  game.gameType = "classic"
  hide(gameTypes)
  show(classicFightersContainer);
  subheader.innerText = `Choose your fighter!`
};

function selectClassicFighter(event) {
  var personFighter = event.target.id;
  if (event.target.id) {
    game.person.fighter = personFighter;
    console.log(game.person.fighter)
    randomizeComputerFighter();
    showFighters();
    return personFighter
  }
};

function showMythicalGame() {
  game.gameType = "mythical"
  hide(gameTypes)
  show(mythicalFightersContainer);
  subheader.innerText = `Choose Your Fighter!`
};

function selectMythicalFighter(event) {
  var personFighter = event.target.id;
    if (event.target.id) {
      game.person.fighter = personFighter;
      console.log(game.person.fighter)
      randomizeComputerFighter();
      showFighters();
      return personFighter
  }
};

function randomizeComputerFighter() {
  if (game.gameType === "classic") {
    game.computer.fighter = game.classicFighters[Math.floor(Math.random()
      * game.classicFighters.length)];
    console.log(game.computer.fighter);
    return game.computer.fighter
  } else if (game.gameType === "mythical") {
    game.computer.fighter = game.mythicalFighters[Math.floor(Math.random()
      * game.mythicalFighters.length)];
    console.log(game.computer.fighter);
    return game.computer.fighter
  }
};

function showFighters() {
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
  console.log("Hello!");
  setTimeout(resetGameBoard, 1000);
};

function resetGameBoard() {
  hide(gameTypes);
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
  game.gameType = "";
  clearTimeout(setTimeout(resetGameBoard, 1000));
  show(gameTypes);
  show(changeGameButton);
  hide(chosenFightersContainer);
  hide(classicFightersContainer);
  hide(mythicalFightersContainer);
  subheader.innerText = `Choose Your Game!`
};
