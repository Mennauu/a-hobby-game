const PLAYER_SPRITE_NAME = 'player'

class PlayerAnimations {
  constructor(anims) {
    this.anims = anims

    this.setAnimations()
  }

  setAnimations() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(PLAYER_SPRITE_NAME, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(PLAYER_SPRITE_NAME, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'up',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 4 }],
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'down',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 4 }],
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'idle',
      frames: [{ key: PLAYER_SPRITE_NAME, frame: 4 }],
      frameRate: 20,
    })
  }
}

export default PlayerAnimations
