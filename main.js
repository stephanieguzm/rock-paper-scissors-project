var game = new Game();
//query selectors
var chooseClassicGame = document.querySelector(".classic-choice-box");
var chooseDifficultGame = document.querySelector(".difficult-choice-box");
var classicPaperFighter = document.getElementById("c0");
var classicRockFighter = document.getElementById("c1");
var classicScissorsFighter = document.getElementById("c2");
var difficultPaperFighter = document.getElementById("d0");
var difficultRockFighter = document.getElementById("d1");
var difficultScissorsFighter = document.getElementById("d2");
var difficultfireFighter = document.getElementById("d3");
var changeGameButton = document.getElementsByClassName("change-game-btn");
var gameTypes = document.querySelector(".game-types");
var classicFighters = document.querySelector(".c-fighters");
var classicFightersArray = document.querySelectorAll(".c-fighters .c-fighter")
var difficultFighters = document.querySelector(".d-fighters");
var subheader = document.querySelector(".subheader")

// event listeners
chooseClassicGame.addEventListener("click", showClassicGameBoard);

for (var i = 0; i < classicFightersArray.length; i++) {
  classicFightersArray[i].addEventListener("click", selectPersonFighter) }

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
function showClassicGameBoard() {
  hide(gameTypes)
  show(classicFighters);
  subheader.innerText = `Choose Your Fighter!`
};

// person selects a fighter
function selectPersonFighter(event) {
  for (var i = 0; i < classicFightersArray.length; i++) {
    if (event.target.id === classicFightersArray[i]) {
      var personFighter = event.target.id
  }
    var
  }
// 
//   if (game.gameType === 'classicFighters') {
//     for (var i = 0; i < game.classicFighters.length; i++) {
//       if (game.difficultFighters[i].id == event.target.id) {
//         return;
//       }
//     }
//   } else if (game.gameType === 'difficult') {
//     for (var i = 0; i < game.difficultFighters.length; i++) {
//       if (game.classicFighters[i].id == event.target.id) {
//         return;
//       }
//     }
//   }
// }


// keep within Game class and push result to computer.fighter (for computer)
function takeTurn(fighters) {
  var computerFighter = Math.floor(Math.random() * fighters.length)
  this.fighter = computerFighter;
}

// pull in .game.gameType from main.js (catch w/ event listener)

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
function chooseDifficultGame(event) {

}

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
