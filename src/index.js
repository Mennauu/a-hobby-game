import Phaser from 'phaser'
import Game from './scenes/game'

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
}

export default new Phaser.Game(config)
