import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Intro extends Component {
  static propTypes = {
      name: PropTypes.string,
      secondName: PropTypes.string,
    };

    render() {
      const { name, secondName } = this.props;
      return (
        <div>
          {name} en {secondName} zijn mooi.
        </div>
      );
    }
}
