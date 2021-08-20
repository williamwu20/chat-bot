import { SEND_MESSAGE } from '../actions'

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
    default:
      return state
  }
}
