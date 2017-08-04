import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import {connect} from 'react-redux'
import {initTree} from '../actions/treeActions'

class Welcome extends Component {
  constructor () {
    super()
    this.state = {
      toRedux: {
        playerName: '',
        treeName: '',
        maxTreeAge: ''
      }
    }
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>
          Welcome!
        </Text>
        <TextInput placeholder='What your name? :D' value={this.state.toRedux.playerName} onChangeText={(text) => {
          let oldState = this.state.toRedux
          let newState = {...oldState, playerName: text}
          this.setState({
            toRedux: newState
          })
        }} />
        <TextInput value={this.state.toRedux.treeName} onChangeText={(text) => {
          let oldState = this.state.toRedux
          let newState = {...oldState, treeName: text}
          this.setState({
            toRedux: newState
          })
        }} />
        <Button onPress={() => {
          this.submitInit(this.state.toRedux.playerName, this.state.toRedux.treeName)
          navigate('Main')
        }}
          title='Submit' />
      </View>
    )
  }
  submitInit (playerName, treeName) {
    let maxTreeAge = Math.floor(Math.random() * 15)
    let currentTreeAge = 0
    this.props.initTree(playerName, treeName, maxTreeAge, currentTreeAge)
  }
}

const mapStateToProps = (state) => {
  return {
    treeName: state.treeName,
    playerName: state.playerName,
    maxTreeAge: state.maxTreeAge,
    currentAge: state.currentTreeAge
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initTree: (playerName, treeName, maxTreeAge, currentTreeAge) => {
      dispatch(initTree(playerName, treeName, maxTreeAge, currentTreeAge))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
