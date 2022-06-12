this.this.person.fighterclass Game {
  constructor() {
    this.gameType;
    this.classicFighters = ["paper", "rock", "scissors"];
    this.difficultFighters = ["rock", "paper", "scissors", "fire"];
    this.person = new Player("person", "👩🏽‍💼");
    this.computer = new Player("computer", "💻");
    this.winner;
    }


  determineWinner() {
    if (this.person.fighter === this.computer.fighter) {
      return `It's a draw!`;
    } if (this.person.fighter === "rock" && (this.computer.fighter === "scissors" || this.computer.fighter === "fire")) {
      this.winner = this.person;
      this.person.addWin();
      return `You win!`
    } if (this.person.fighter=== "rock" && this.computer.fighter === "paper") {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    } if (this.person.fighter === "paper" && (this.computer.fighter === "scissors" || this.computer.fighter == "fire")) {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    } if (this.person.fighter === "paper" && this.computer.fighter === "rock") {
      this.winner = this.person
      this.person.addWin();
      return `You win!`
    } if (this.person.fighter === "scissors" && (this.computer.fighter === "rock" || this.computer.fighter === "fire")) {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    } if (this.person.fighter === "scissors" && this.computer.fighter === "paper") {
      this.winner = this.person
      this.person.addWin();
      return `You win!`
    } if (this.person.fighter=== "fire" && (this.computer.fighter === "paper" || this.computer.fighter === "scissors")) {
      this.winner = this.person
      this.person.addWin();
      return `You win!`
    } if (this.person.fighter === "fire" && (this.computer.fighter === "rock")) {
      this.winner = this.computer
      this.computer.addWin();
      return `You lose!`
    }
  }

//   resetGameBoard() {
//     //choose fighter view - with gameType parameter
// }

}
