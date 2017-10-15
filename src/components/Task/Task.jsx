import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChecklistItem } from './../ChecklistItem';

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
        <div>
          <ul>
            {task.checklist.map(c => (
              <ChecklistItem key={c.id} text={c.text} done={c.completed} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
