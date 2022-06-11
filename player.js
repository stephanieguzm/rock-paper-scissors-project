class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
  }

  takeTurn(fighters) {
    if (this.player === game.computer) {
      var computerFighter = Math.floor(Math.random() * fighters.length);
      return computerFighter;
    }
  }

  addWin() {
    this.wins ++
  }
}


  // the takeTurn function can be thought of like a Submit
  // button on your form.
  // When the player chooses their action,
  // they need to invoke takeTurn to submit their action to
  // the Game class
