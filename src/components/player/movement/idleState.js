class IdleState {
  constructor(player) {
    this.player = player
  }

  enter() {
    this.player.anims.play('idle')
  }
}

export default IdleState
