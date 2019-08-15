import { combineReducers } from 'redux'

import Example from './ExampleReducer'

const appReducer = combineReducers({
  Example,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
