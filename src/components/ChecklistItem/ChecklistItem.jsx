import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChecklistItem extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    return (
      <li>
        {text}
      </li>
    );
  }
}
