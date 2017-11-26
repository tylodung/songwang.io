import C from './constants.js'
import { combineReducers } from 'redux'

export const post = (state={}, action) => {
  if(C.INCREMENT_POST === action) {
    return {
      ...state,
      postsNumber: state.postsNumber + 4
    }
  } 
  return state
}

export const incre = (state={}, action) => {
  if (action.type === C.INCREMENT) {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state
}


export default combineReducers({
  incre,
  post
})
