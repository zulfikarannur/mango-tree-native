import React, {Component} from 'react'
import {Provider} from 'react-redux'

import Navigator from './Navigator'
import store from './stores'

export default class MangoTree extends Component {
  render () {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
