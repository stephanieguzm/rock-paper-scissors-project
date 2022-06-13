class Game {
  constructor() {
    this.gameType;
    this.classicFighters = ["paper", "rock", "scissors"];
    this.difficultFighters = ["paper", "rock", "scissors", "fire"];
    this.person = new Player("person", "👩🏽‍💼");
    this.computer = new Player("computer", "💻");
    this.winner;
    }

  determineWinner() {
    if (this.person.fighter === this.computer.fighter) {
      subheader.innerText = `It's a draw!`;
    } else if (
      this.person.fighter === "rock" && (this.computer.fighter === "scissors" || this.computer.fighter === "fire")
      || this.person.fighter=== "fire" && (this.computer.fighter === "paper" || this.computer.fighter === "scissors")
      || this.person.fighter === "scissors" && this.computer.fighter === "paper"
      || this.person.fighter === "paper" && this.computer.fighter === "rock") {
        this.winner = this.person;
        this.person.addWin();
        subheader.innerText = `You win!`
        personScore.innerText = `Wins: ${this.person.wins}`
      } else {
        this.winner = this.computer
        this.computer.addWin();
        subheader.innerText = `You lose!`
        computerScore.innerText = `Wins: ${this.computer.wins}`
      }
    }

  changeGameType() {
    game.gameType = "";
  }
}

  // determineWinner() {
  //   if (this.person.fighter === this.computer.fighter) {
  //     subheader.innerText = `It's a draw`;
  //   } if (this.person.fighter === "rock" && (this.computer.fighter === "scissors" || this.computer.fighter === "fire")) {
  //     this.winner = this.person;
  //     this.person.addWin();
  //     subheader.innerText = `You win!`
  //   } if (this.person.fighter=== "rock" && this.computer.fighter === "paper") {
  //     this.winner = this.computer
  //     this.computer.addWin();
  //     subheader.innerText = `You lose!`
  //   } if (this.person.fighter === "paper" && (this.computer.fighter === "scissors" || this.computer.fighter == "fire")) {
  //     this.winner = this.computer
  //     this.computer.addWin();
  //     subheader.innerText = `You lose!`
  //   } if (this.person.fighter === "paper" && this.computer.fighter === "rock") {
  //     this.winner = this.person
  //     this.person.addWin();
  //     subheader.innerText = `You win!`
  //   } if (this.person.fighter === "scissors" && (this.computer.fighter === "rock" || this.computer.fighter === "fire")) {
  //     this.winner = this.computer
  //     this.computer.addWin();
  //     subheader.innerText = `You lose!`
  //   } if (this.person.fighter === "scissors" && this.computer.fighter === "paper") {
  //     this.winner = this.person
  //     this.person.addWin();
  //     subheader.innerText = `You win!`
  //   } if (this.person.fighter=== "fire" && (this.computer.fighter === "paper" || this.computer.fighter === "scissors")) {
  //     this.winner = this.person
  //     this.person.addWin();
  //     subheader.innerText = `You win!`
  //   } if (this.person.fighter === "fire" && (this.computer.fighter === "rock")) {
  //     this.winner = this.computer
  //     this.computer.addWin();
  //     subheader.innerText = `You lose!`
  //   }
  // }



}
