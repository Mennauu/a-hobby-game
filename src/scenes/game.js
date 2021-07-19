import PlayerControls from '../components/player/controls/playerControls'
import PlayerSettings from '../components/player/settings/playerSettings'
import PlayerUpdate from '../components/player/update/playerUpdate'

class Game extends Phaser.Scene {
  constructor() {
    super('game')

    this.keyboardInput = {}
    this.player = {}
    this.playerControls = {}
  }

  init() {
    this.setKeyBoard()
  }

  create() {
    this.player = this.physics.add.sprite(0, 0, 'player')

    new PlayerSettings(this.player, this.cameras)
    new PlayerControls(this.player, this.keyboardInput)
  }

  setKeyBoard() {
    this.keyboardInput = this.input.keyboard.createCursorKeys()
    this.keyboardInput.Z = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z)
  }

  update() {
    new PlayerUpdate(this.player, this.keyboardInput)
  }
}

export default Game
