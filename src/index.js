import Phaser from 'phaser'
import Preload from './scenes/preload'
import Game from './scenes/game'

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [Preload, Game],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
}

export default new Phaser.Game(config)
