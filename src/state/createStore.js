import { createStore } from 'redux'
import C from './constants.js'
import reducers from './reducers.js'
import initialState from './initialState.js'


const reducer = (state=initialState, action) => {
  if (action.type === C.INCREMENT) {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state
}

export default () => createStore(reducer, initialState)
