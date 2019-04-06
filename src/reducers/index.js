import { combineReducers } from 'redux';

import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import selectedChannelReducer from './selected_channel_reducer';
import currentUserReducer from './current_user_reducer';

export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
})
