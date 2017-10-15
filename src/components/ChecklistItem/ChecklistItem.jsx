import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChecklistItem.css';

export default class ChecklistItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
  };

  render() {
    const { text } = this.props;
    const { done } = this.props;
    return (
      <li className={(done ? 'Strike' : '')}>
        {text}
      </li>
    );
  }
}
