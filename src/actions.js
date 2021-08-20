export const SEND_MESSAGE = "SEND_MESSAGE"
export const LOADING_START = "LOADING_START"
export const LOADING_STOP = "LOADING_STOP"

export function createAction(type, payload) {
    const action = { type, payload }
    if (payload instanceof Error) {
      action.error = true
    }
    return action
  }
  
const actions = {}

actions.sendMessage = (message) => createAction(SEND_MESSAGE, message)

// Loading
actions.startLoading = () => createAction(LOADING_START)
actions.stopLoading = () => createAction(LOADING_STOP)

export default actions