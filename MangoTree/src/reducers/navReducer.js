import AppNavigator from '../config/router'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Welcome'))

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}

export default navReducer
