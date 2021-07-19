class MoveLeftState {
  constructor(player, keyboardInput) {
    this.player = player
    this.keyboardInput = keyboardInput
  }

  enter() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityX(-this.player.runSpeed)
    } else {
      this.player.setVelocityX(-this.player.walkSpeed)
    }

    this.player.anims.play('left', true)
  }
}

export default MoveLeftState
