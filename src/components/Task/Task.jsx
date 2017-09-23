import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static propTypes = {
    task: PropTypes.object,
  };

  render() {
    const { task } = this.props;
    console.log(task);
    return (
      <div>
        Next task is {task.text}.

        <div>
          {task.notes}
        </div>
      </div>
    );
  }
}
