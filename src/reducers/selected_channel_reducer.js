import { SELECT_CHANNEL } from '../actions';

const selectedChannelReducer = (state=null, action) => {
  switch(action.type) {
    case SELECT_CHANNEL:
      return action.payload;
    default:
      return 'general';
  }
}

export default selectedChannelReducer;
