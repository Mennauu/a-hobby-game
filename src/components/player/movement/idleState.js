class IdleState {
  constructor(player, keyboardInput) {
    this.player = player
    this.keyboardInput = keyboardInput
  }

  enter() {
    this.player.anims.play('idle')
  }
}

export default IdleState
