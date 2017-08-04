const initialState = {
  treeData: {
    playerName: '',
    treeName: '',
    currentTreeAge: 0,
    maxTreeAge: '',
    fruits: {
      good: 0,
      bad: 0
    }
  }
}

const treeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TREE':
      return {
        ...state.treeData,
        playerName: action.payload.playerName,
        treeName: action.payload.treeName,
        maxTreeAge: action.payload.maxTreeAge
      }
    default:
      return state
  }
}

export default treeReducer
