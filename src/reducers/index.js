import { combineReducers } from 'redux'
import messages from './messages'
import loading from './loading'

const rootReducer = combineReducers({
  loading,
  messages
})

export default rootReducer