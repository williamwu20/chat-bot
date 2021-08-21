export const SEND_MESSAGE = "SEND_MESSAGE"
export const RECEIVE_JOKE = "RECEIVE_JOKE"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const LOADING_START = "LOADING_START"
export const LOADING_STOP = "LOADING_STOP"
export const INIT_APP = "INIT_APP"
export const HANDLE_JOKE = "HANDLE_JOKE"

export function createAction(type, payload) {
    const action = { type, payload }
    if (payload instanceof Error) {
      action.error = true
    }
    return action
  }
  
const actions = {}

actions.initApp = () => createAction(INIT_APP)

actions.sendMessage = (message) => createAction(SEND_MESSAGE, message)
actions.receiveMessage = (message) => createAction(RECEIVE_MESSAGE, message)

actions.handleJoke = () => createAction(HANDLE_JOKE)
actions.receiveJoke = ({ punchline, setup }) => createAction(RECEIVE_JOKE, { punchline, message: setup })

// Loading
actions.startLoading = () => createAction(LOADING_START)
actions.stopLoading = () => createAction(LOADING_STOP)

export default actions