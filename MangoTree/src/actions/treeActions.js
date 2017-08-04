export const initTree = (playerName, treeName, maxTreeAge) => {
  return {
    type: 'INIT_TREE',
    payload: {
      playerName: playerName,
      treeName: treeName,
      maxTreeAge: maxTreeAge
    }
  }
}
