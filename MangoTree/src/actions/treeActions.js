export const initTree = (playerName, treeName, maxTreeAge, currentTreeAge) => {
  return {
    type: 'INIT_TREE',
    payload: {
      playerName: playerName,
      treeName: treeName,
      maxTreeAge: maxTreeAge,
      currentTreeAge: currentTreeAge
    }
  }
}

export const nextYear = (currentTreeAge) => {
  return {
    type: 'NEXT_YEAR',
    payload: {
      currentTreeAge: currentTreeAge
    }
  }
}
