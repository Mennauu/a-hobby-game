import Player from '@components/player'
import spritesheets from '@data/spritesheets'

class Game extends Phaser.Scene {
  constructor() {
    super()

    this.player = {}
    this.keyboardInput = {}
  }

  init() {
    this.setKeyBoard()
  }

  preload() {
    this.preloadSpritesheets()
  }

  create() {
    this.player = new Player(this)
  }

  update() {
    this.player.update()
  }

  setKeyBoard() {
    this.keyboardInput = this.input.keyboard.createCursorKeys()
    this.keyboardInput.Z = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z)
  }

  preloadSpritesheets() {
    spritesheets.forEach(spritesheet => {
      this.load.spritesheet(spritesheet.name, spritesheet.sprite, {
        frameWidth: spritesheet.frameWidth,
        frameHeight: spritesheet.frameHeight,
      })
    })
  }
}

export default Game
