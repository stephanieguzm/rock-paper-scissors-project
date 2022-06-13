var game = new Game();
//query selectors
var chooseClassicGame = document.querySelector(".classic-choice-box");
var chooseDifficultGame = document.querySelector(".difficult-choice-box");
var chosenFightersContainer = document.querySelector(".chosen-fighters-container");
var changeGameButton = document.querySelector(".change-game-btn");
var gameTypes = document.querySelector(".game-types");
var classicFightersContainer = document.querySelector(".c-fighters");
var difficultFightersContainer = document.querySelector(".d-fighters");
var subheader = document.querySelector(".subheader")
var personScore = document.querySelector("#personScore")
var computerScore = document.querySelector("#computerScore")

// event listeners
chooseClassicGame.addEventListener("click", showClassicGame);
classicFightersContainer.addEventListener("click", function(event) {
  selectClassicFighter(event)
});
chooseDifficultGame.addEventListener("click", showDifficultGame)
difficultFightersContainer.addEventListener("click", function(event) {
  selectDifficultFighter(event)
});
changeGameButton.addEventListener("click", changeGame)

//helper functions
function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

// triggered by event listener
function showClassicGame() {
  game.gameType = "classic"
  hide(gameTypes)
  show(classicFightersContainer);
  subheader.innerText = `Choose your fighter!`
};
// triggered by event listener
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

function showDifficultGame() {
  game.gameType = "difficult"
  hide(gameTypes)
  show(difficultFightersContainer);
  subheader.innerText = `Choose Your Fighter!`
  // playDifficultGame();
};

function selectDifficultFighter(event) {
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
    game.computer.fighter = game.classicFighters[Math.floor(Math.random() * game.classicFighters.length)];
    console.log(game.computer.fighter);
    return game.computer.fighter
  } else if (game.gameType === "difficult") {
    game.computer.fighter = game.difficultFighters[Math.floor(Math.random() * game.difficultFighters.length)];
    console.log(game.computer.fighter);
    return game.computer.fighter
  }
};

function showFighters() {
  hide(gameTypes);
  hide(classicFightersContainer);
  hide(difficultFightersContainer);
  show(chosenFightersContainer);
  show(changeGameButton);
  chosenFightersContainer.innerHTML = `
  <section class="fighters">
    <img src="assets/${game.person.fighter}.png" alt="laptop" width="100" height="100">
    <img src="assets/${game.computer.fighter}.png" alt="laptop" width="100" height="100">
  </section>`
  game.determineWinner();
  console.log("Hello!");
  setTimeout(resetGameBoard, 1000);
};

function resetGameBoard() {
  hide(gameTypes);
  hide(chosenFightersContainer);
  if (game.gameType === "classic") {
    hide(difficultFightersContainer)
    showClassicGame()
  } else if (game.gameType === "difficult") {
    hide(classicFightersContainer)
    showDifficultGame()
  }
};

function changeGame() {
  game.gameType = "";
  clearTimeout(setTimeout(resetGameBoard, 1000));
  show(changeGameButton);
  show(gameTypes);
  hide(chosenFightersContainer);
  hide(classicFightersContainer);
  hide(difficultFightersContainer);
  subheader.innerText = `Choose Your Game!`
};


// if the user clicks on the classic game, then the user will be displayed
// a list of characters associated with that changeGameType
// the user will then be able to select the character of their choice


// if the user clicks on the difficult game, then the user will be displayed
// a list of characters associated with that changeGameType
// the user will then be able to select the character of their choice
//pull in .game.gameType from main.js (catch w/ event listener)
// function chooseDifficultGame(event) {
//
// }
