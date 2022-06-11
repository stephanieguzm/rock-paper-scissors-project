class Game {
  constructor(gameType) {
    this.gameType = "classic";
    this.fighters = ["rock", "paper", "scissors"];
    this.person = new Player("person", "👩🏽‍💼");
    this.computer = new Player("computer", "💻")
    this.personFighter = personFighter;
    this.computerFighter = takeTurn(fighters);
    this.winner = "";
    }

  chooseGameType(gameType) {
    if (this.gameType === "classic") {
      this.fighters
    } else {
      this.fighters.push("fire")
    }
  }

  playClassicGame() {
    
  }

  playDifficultGame() {

  }
// checks game board for win or draw conditions
// adds wins to correct player class and tracks winner
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
    } if (personFighter === "paper" && (computerFighter === "rock") {
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

  resetGame() {
    //choose fighter view - with gameType parameter
}

}
