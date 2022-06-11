var person = new Player("person", "👩🏽‍💼");
var computer = new Player("computer", "💻")

class Game {
  constructor() {
    this.gameType = "difficult" || "classic";
    this.choices = ["rock", "paper", "scissors"];
    this.winner;
    }

//checks game board for win or draw conditions
  determineWinner() {
    if (person.choice === computer.choice) {
      return `It's a draw!`;
  } if (person.choice === "rock" && (computer.choice === "scissors" || computerChoice === "fire")) {
      person.wins ++
      this.winner = person
      return `You win!`
    } if (person.choice === "rock" && computer.choice === "paper") {
      computer.wins ++
      this.winner = computer
      return `You lose!`
    } if (person.choice === "paper" && computer.choice === "scissors" || computer.choice == "fire") {
      computer.wins ++
      this.winner = computer
      return `You lose!`
    } if (person.choice === "paper" && (computer.choice === "rock") {
      person.wins ++
      this.winner = person
      return `You win!`
    } if (person.choice === "scissors" && computer.choice === "rock" || computer.choice === "fire") {
      computer.wins ++
      this.winner = computer
      return `You lose!`
    } if (person.choice === "scissors" && computer.choice === "paper") {
      person.wins ++
      this.winner = person
      return `You win!`
    } if (person.choice === "fire" && (computer.choice === "paper" || computer.choice === "scissors")) {
      person.wins ++
      this.winner = person
      return `You win!`
    } if (person.choice === "fire" && (computer.choice === "rock")) {
      computer.wins ++
      this.winner = computer
      return `You lose!`
    }

  //resetGame() {
  // reset game board to start new game
  //
// }

}
