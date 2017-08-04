import React, {Component} from 'react'
import {Text} from 'react-native'
import {connect} from 'react-redux'

class Main extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     playerName: '',
  //     treeName: '',
  //     maxTreeAge: ''
  //   }
  // }

  render () {
    return (
      <Text>
        Ini Main
      </Text>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    treeName: state.treeName,
    playerName: state.playerName,
    maxTreeAge: state.maxTreeAge
  }
}

export default connect(mapStateToProps)(Main)
