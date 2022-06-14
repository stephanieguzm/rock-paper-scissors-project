class Game {
  constructor() {
    this.gameType;
    this.classicFighters = ["paper", "rock", "scissors"];
    this.mythicalFighters = ["dragon", "wizard", "werewolf", "unicorn", "mermaid"];
    this.person = new Player("person");
    this.computer = new Player("computer");
    this.winner;
    }

  determineWinner() {
    if (this.person.fighter === this.computer.fighter) {
      subheader.innerText = `It's a draw!`;
    } else if (
      this.person.fighter === "rock" && this.computer.fighter === "scissors"
      || this.person.fighter === "scissors" && this.computer.fighter === "paper"
      || this.person.fighter === "paper" && this.computer.fighter === "rock"
      || this.person.fighter === "dragon" &&
        (this.computer.fighter === "werewolf" || this.computer.fighter === "unicorn")
      || this.person.fighter === "wizard" &&
        (this.computer.fighter === "dragon" || this.computer.fighter === "mermaid")
      || this.person.fighter === "werewolf" &&
        (this.computer.fighter === "wizard" || this.computer.fighter === "unicorn")
      || this.person.fighter === "unicorn" &&
        (this.computer.fighter === "wizard" || this.computer.fighter === "mermaid")
      || this.person.fighter === "mermaid" &&
        (this.computer.fighter === "werewolf" || this.computer.fighter === "dragon")) {
        this.winner = this.person;
        this.person.addWin();
        subheader.innerText = `You win!`
        personScore.innerText = `Wins: ${this.person.wins}`
      } else {
        this.winner = this.computer
        this.computer.addWin();
        subheader.innerText = `Computer wins!`
        computerScore.innerText = `Wins: ${this.computer.wins}`
      }
    }

  randomizeComputerFighter() {
    if (this.gameType === "classic") {
      this.computer.fighter = this.classicFighters[Math.floor(Math.random()
        * this.classicFighters.length)];
      return this.computer.fighter
    } else if (this.gameType === "mythical") {
      this.computer.fighter = this.mythicalFighters[Math.floor(Math.random()
        * this.mythicalFighters.length)];
      return this.computer.fighter
    }
  }
};
