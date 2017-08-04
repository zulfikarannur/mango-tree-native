import {StackNavigator} from 'react-navigation'

import Welcome from '../screens/Welcome'
import Main from '../screens/Main'
import GameOver from '../screens/GameOver'

const AppNavigator = StackNavigator({
  Welcome: {screen: Welcome},
  Main: {screen: Main},
  GameOver: {screen: GameOver}
}, {
  headerMode: 'none'
})

export default AppNavigator
