var game = new Game();
//query selectors
var chooseClassicGame = document.querySelector(".classic-choice-box");
var chooseDifficultGame = document.querySelector(".difficult-choice-box");
var classicPaperFighter = document.getElementById("paper");
var classicRockFighter = document.getElementById("rock");
var classicScissorsFighter = document.getElementById("scissors");
var difficultPaperFighter = document.getElementById("paper");
var difficultRockFighter = document.getElementById("rock");
var difficultScissorsFighter = document.getElementById("scissors");
var difficultFireFighter = document.getElementById("fire");
var changeGameButton = document.getElementsByClassName("change-game-btn");
var gameTypes = document.querySelector(".game-types");
var classicFightersContainer = document.querySelector(".c-fighters");
var difficultFighters = document.querySelector(".d-fighters");
var subheader = document.querySelector(".subheader")
var personScore = document.querySelector("#personScore")
var computerScore = document.querySelector("#computerScore")

// event listeners
chooseClassicGame.addEventListener("click", showClassicGame);
classicFightersContainer.addEventListener('click', function(event){
  selectClassicFighter(event)
});

// chooseDifficultGame.addEventListener("click", showDifficultGameBoard);
// paperFighter.addEventListener("click", functionName);
// rockfighter.addEventListener(("click", functionName));
// scissorsFighter.addEventListener("click", functionName);
// fireFighter.addEventListener("click", functionName);
// changeGameButton.addEventListener("click", functionName);

//helper functions
function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

// show classic gameboard
function showClassicGame() {
  game.gameType = "classic"
  hide(gameTypes)
  show(classicFightersContainer);
  subheader.innerText = `Choose Your Fighter!`
  selectClassicFighter();
  playClassicGame();
};

function playClassicGame() {
  // determineWinner();
  setTimeout(4000)
}

function selectClassicFighter(event) {
  var personFighter = event.target.id;
    if (event.target.id) {
      game.person.fighter = personFighter;
      return personFighter
  }
  game.randomizeComputerFighter();

}

// function selectDifficultFighter(event) {
//   var personFighter = parseInt(event.target.id);
//   for (var i = 0; i < game.difficultFighters.length; i++) {
//     if (personFighter === game.difficultFighters[i]) {
//       personFighter = game.person.fighter;
//     }
//   }
// }

// if the user clicks on the classic game, then the user will be displayed
// a list of characters associated with that changeGameType
// the user will then be able to select the character of their choice
// function chooseClassicGame(event) {
//   var classicGameChosen = event.target.id
//   if (classicGameChosen === chooseClassicGame) {
//     show("fighter-types");
//   }
// }

// if the user clicks on the difficult game, then the user will be displayed
// a list of characters associated with that changeGameType
// the user will then be able to select the character of their choice
//pull in .game.gameType from main.js (catch w/ event listener)
// function chooseDifficultGame(event) {
//
// }

// function goToHomePage() {
//
// }



// build out all your functions in main.js
// first and then figure out where they go

// personFighterChoice
// main functions
//function goToHomePage()
// playClassicGame()
// showClassicGameBoard()
// showDifficultGameBoard()
// playDifficultGame()
// showWinner() - display selected fighters, update subheading, scores
// showGameFighters()
// updateWinnerScore()
// changeGameType()
