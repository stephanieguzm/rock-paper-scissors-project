class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.fighter;
  }

  addWin() {
    this.wins ++
  }
};
