import Phaser from 'phaser'

import playerSprite from '../assets/player.png'

class Preload extends Phaser.Scene {
  constructor() {
    super()
  }

  preload() {
    this.preloadImages()
  }

  create() {
    this.playerSpriteAnimations()
    this.scene.start('game')
  }

  preloadImages() {
    this.load.spritesheet('player', playerSprite, { frameWidth: 32, frameHeight: 48 })
  }

  playerSpriteAnimations() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'up',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'down',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'idle',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 20,
    })
  }
}

export default Preload
