const PLAYER_SPRITE_NAME = 'player'

class PlayerAnimations {
  constructor(anims) {
    this.anims = anims

    this.setAnimations()
  }

  setAnimations() {
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers(PLAYER_SPRITE_NAME, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'down-idle',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 0 }],
      frameRate: 20,
    })

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(PLAYER_SPRITE_NAME, { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'left-idle',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 4 }],
      frameRate: 20,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(PLAYER_SPRITE_NAME, { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'right-idle',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 8 }],
      frameRate: 20,
    })

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers(PLAYER_SPRITE_NAME, { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'up-idle',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 12 }],
      frameRate: 20,
    })
  }
}

export default PlayerAnimations
