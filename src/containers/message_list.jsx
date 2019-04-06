import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal imports
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('general');
  }

  render() {
    return(
      <div className="message-list">
        {
          this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })
        }
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
