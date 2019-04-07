import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal imports
import { selectChannel, fetchMessages } from '../actions'

class ChannelList extends Component {
  // TODO refresh messages list

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return(
      <div className="channels-container">
        <ul>
        {
          this.props.channels.map((channel) => {
            return(
              <li
                className={this.props.selectedChannel === channel ? 'selected' : null }
                onClick={() => this.handleClick(channel)}
                key={channel}>{channel}</li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
