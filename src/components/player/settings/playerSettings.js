class PlayerSettings {
  constructor(player, cameras) {
    this.player = player
    this.cameras = cameras

    this.setPlayer()
    this.setCamera()
  }

  setPlayer() {
    this.player.walkSpeed = 100
    this.player.runSpeed = 150
    this.player.setBounce(0)
    this.player.setCollideWorldBounds(true)
  }

  setCamera() {
    this.cameras.main.startFollow(this.player)
  }
}

export default PlayerSettings
