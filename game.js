class Game {
  constructor(gameType, personFighter) {
    this.gameType = gameType;
    this.fighters = ["rock", "paper", "scissors"];
    this.person = new Player("person", "👩🏽‍💼");
    this.computer = new Player("computer", "💻");
    this.personFighter = personFighter;
    this.computerFighter = player.takeTurn(this.fighters);
    this.winner;
    }

  chooseFighter() {
    if (this.gameType === "classic") {
      return this.fighters
    } else {
      this.gameType === "difficult"
      this.fighters.push("fire")
      return this.fighters
    }
  }

  //pull in .game.gameType from main.js (catch w/ event listener)
  playClassicGame() {
    chooseFighter();
    this.computerFighter = player.takeTurn(this.fighters)

  }

  //pull in .game.gameType from main.js (catch w/ event listener)
  playDifficultGame() {
    chooseFighter();
    this.computerFighter = player.takeTurn(this.fighters)

  }

  determineWinner() {
    if (personFighter === computerFighter) {
      return `It's a draw!`;
    } if (personFighter === "rock" && (computerFighter === "scissors" || computerFighter === "fire")) {
      this.winner = this.person;
      this.person.addWin();
      return `You win!`
    } if (personFighter=== "rock" && computerFighter === "paper") {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    } if (personFighter === "paper" && (computerFighter === "scissors" || computerFighter == "fire")) {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    } if (personFighter === "paper" && computerFighter === "rock") {
      this.winner = this.person
      this.person.addWin();
      return `You win!`
    } if (personFighter === "scissors" && (computerFighter === "rock" || computerFighter === "fire")) {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    } if (personFighter === "scissors" && computerFighter === "paper") {
      this.winner = this.person
      this.person.addWin();
      return `You win!`
    } if (personFighter=== "fire" && (computerFighter === "paper" || computerFighter === "scissors")) {
      this.winner = this.person
      this.person.addWin();
      return `You win!`
    } if (personFighter === "fire" && (computerFighter === "rock")) {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    }
  }

//   resetGame() {
//     //choose fighter view - with gameType parameter
// }

}
