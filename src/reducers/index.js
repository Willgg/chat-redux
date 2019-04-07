import { combineReducers } from 'redux';

import messagesReducer from './messages_reducer';
import selectedChannelReducer from './selected_channel_reducer';

const identityReducer = (state = null) => state;

export default combineReducers({
  channels: identityReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: identityReducer
})
