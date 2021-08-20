import { LOADING_START, LOADING_STOP } from '../actions'

export default function loading(state = false, action) {
  switch (action.type) {
    case LOADING_START:
      return true
    case LOADING_STOP:
      return false
    default:
      return state
  }
}