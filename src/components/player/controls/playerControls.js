class PlayerControls {
  constructor(player, keyboardInput) {
    this.player = player
    this.keyboardInput = keyboardInput
  }

  moveUp() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityY(-this.player.runSpeed)
    } else {
      this.player.setVelocityY(-this.player.walkSpeed)
    }

    this.player.anims.play('up', true)
  }

  moveRight() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityX(this.player.runSpeed)
    } else {
      this.player.setVelocityX(this.player.walkSpeed)
    }

    this.player.anims.play('right', true)
  }

  moveDown() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityY(this.player.runSpeed)
    } else {
      this.player.setVelocityY(this.player.walkSpeed)
    }

    this.player.anims.play('down', true)
  }

  moveLeft() {
    if (this.keyboardInput.Z.isDown) {
      this.player.setVelocityX(-this.player.runSpeed)
    } else {
      this.player.setVelocityX(-this.player.walkSpeed)
    }

    this.player.anims.play('left', true)
  }

  idle() {
    if (this.player.latestMoveState) {
      this.player.anims.play(this.player.latestMoveState)
    }
  }
}

export default PlayerControls
