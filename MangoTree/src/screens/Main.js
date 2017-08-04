import React, {Component} from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import {connect} from 'react-redux'
import {nextYear} from '../actions/treeActions'

class Main extends Component {
  render () {
    return (
      <View>
        <Text>
          {this.props.treeReducer.treeData.treeName} is now {this.this.props.treeReducer.treeData.currentTreeAge} years old :D
        </Text>
        <Button
          title='Grow up'
          onPress={() => {
            this.nextYear()
          }}
         />
      </View>
    )
  }

  nextYear () {
    let newYear = this.props.treeReducer.treeData.currentTreeAge + 1
    this.nextYear(newYear)
  }
}

const mapStateToProps = (state) => {
  return {
    treeName: state.treeName,
    playerName: state.playerName,
    maxTreeAge: state.maxTreeAge,
    currentTreeAge: state.currentTreeAge
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextYear: (currentTreeAge) => {
      dispatch(nextYear(nextYear))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
