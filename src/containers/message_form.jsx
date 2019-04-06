import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = () => {
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage: createMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(MessageForm);
