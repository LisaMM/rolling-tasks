import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    onButtonClick: PropTypes.func.isRequired,
  };

  handleButtonClick = () => {
    this.props.onButtonClick(this.props.name);
  };

  render() {
    // This button should move the task to the Done panel and show you your next task
    return (
      <button onClick={this.handleButtonClick}>
        {this.props.name}
      </button>
    );
  }
}
