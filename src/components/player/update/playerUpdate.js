import PlayerControls from '../controls/playerControls'

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
        this.playerControls.setState('moveLeftState')

        break
      case this.keyboardInput.right.isDown:
        this.playerControls.setState('moveRightState')

        break
      case this.keyboardInput.up.isDown:
        this.playerControls.setState('moveUpState')

        break
      case this.keyboardInput.down.isDown:
        this.playerControls.setState('moveDownState')

        break
      default:
        this.playerControls.setState('idleState')
    }
  }
}

export default PlayerUpdate
