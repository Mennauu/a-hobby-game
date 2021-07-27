import PlayerAnimations from '@components/player/animations/playerAnimations'
import PlayerUpdate from '@components/player/update/playerUpdate'
import PlayerSettings from '@components/player/settings/playerSettings'
import PlayerControls from '@components/player/controls/playerControls'

class Player {
  constructor(phaser) {
    this.player = phaser.physics.add.sprite(250, 250, 'player')
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
