const channelsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_CHANNELS':
      return action.payload;
    default:
      return state;
  }
}

export default channelsReducer;
