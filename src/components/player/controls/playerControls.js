import MoveLeftState from '../movement/moveLeftState'
import MoveRightState from '../movement/moveRightState'
import MoveUpState from '../movement/moveUpState'
import MoveDownState from '../movement/moveDownState'
import IdleState from '../movement/idleState'

class PlayerControls {
  constructor(player, keyboardInput) {
    this.states = {
      moveLeftState: new MoveLeftState(player, keyboardInput),
      moveRightState: new MoveRightState(player, keyboardInput),
      moveUpState: new MoveUpState(player, keyboardInput),
      moveDownState: new MoveDownState(player, keyboardInput),
      idleState: new IdleState(player),
    }
  }

  setState(name) {
    if (this.currentState === this.states[name]) return

    this.currentState = this.states[name]
    this.currentState.enter()
  }
}

export default PlayerControls
