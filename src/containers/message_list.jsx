import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';
import Message from '../components/message';


class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    return(
      <div className="message-list">
        {this.props.messages.map((m) => {
          return <Message key={m.created_at} message={m} />;
        })}
        <Message />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages }, dispatch
  );
}


export default connect(null, mapDispatchToProps)(MessageList);
