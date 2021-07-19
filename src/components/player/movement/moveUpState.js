class MoveUpState {
  constructor(player, keyboardInput) {
    this.player = player
    this.keyboardInput = keyboardInput
  }

  enter() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityY(-this.player.runSpeed)
    } else {
      this.player.setVelocityY(-this.player.walkSpeed)
    }

    this.player.anims.play('idle')
  }
}

export default MoveUpState
