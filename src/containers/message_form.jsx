import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageForm);
