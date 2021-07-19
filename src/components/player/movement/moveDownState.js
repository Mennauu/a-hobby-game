class MoveDownState {
  constructor(player, keyboardInput) {
    this.player = player
    this.keyboardInput = keyboardInput
  }

  enter() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityY(this.player.runSpeed)
    } else {
      this.player.setVelocityY(this.player.walkSpeed)
    }

    this.player.anims.play('down', true)
  }
}

export default MoveDownState
