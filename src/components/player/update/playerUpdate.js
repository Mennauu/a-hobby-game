class PlayerUpdate {
  constructor(player, keyboard, controls) {
    this.player = player
    this.keyboardInput = keyboard
    this.playerControls = controls

    this.update()
  }

  update() {
    this.player.setVelocity(0)

    switch (true) {
      case this.keyboardInput.left.isDown:
        this.playerControls.moveLeft()

        break
      case this.keyboardInput.right.isDown:
        this.playerControls.moveRight()

        break
      case this.keyboardInput.up.isDown:
        this.playerControls.moveUp()

        break
      case this.keyboardInput.down.isDown:
        this.playerControls.moveDown()

        break
      default:
        this.player.latestMoveState = this.player.anims.currentAnim
          ? this.player.anims.currentAnim.key
          : null
        this.playerControls.idle()
    }
  }
}

export default PlayerUpdate
