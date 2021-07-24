import PlayerAnimations from './animations/playerAnimations'
import PlayerUpdate from './update/playerUpdate'
import PlayerSettings from './settings/playerSettings'
import PlayerControls from './controls/playerControls'

class Player {
  constructor(phaser) {
    this.player = phaser.physics.add.sprite(0, 0, 'player')
    this.anims = phaser.anims
    this.cameras = phaser.cameras
    this.keyboardInput = phaser.keyboardInput
    this.playerControls = new PlayerControls(this.player, this.keyboardInput)

    this.preload()
    this.create()
  }

  preload() {
    new PlayerAnimations(this.anims)
  }

  create() {
    new PlayerSettings(this.player, this.cameras)
  }

  update() {
    new PlayerUpdate(this.player, this.keyboardInput, this.playerControls)
  }
}

export default Player
