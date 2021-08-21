import { RECEIVE_MESSAGE, SEND_MESSAGE, RECEIVE_JOKE } from '../actions'

export default function messages(
  state = {
    data: [],
  },
  action
) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        data: [...state.data, action.payload],
      }
    case RECEIVE_MESSAGE:
        return {
            ...state,
            data: [...state.data, action.payload],
            }
    case RECEIVE_JOKE:
        return {
            ...state,
            data: [...state.data, action.payload],
        }
    default:
      return state
  }
}
