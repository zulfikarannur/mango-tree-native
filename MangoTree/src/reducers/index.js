import {combineReducers} from 'redux'

import treeReducer from './treeReducer'
import navReducer from './navReducer'

export default combineReducers({
  navReducer,
  treeReducer
})
