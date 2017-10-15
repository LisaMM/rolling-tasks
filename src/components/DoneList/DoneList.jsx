import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChecklistItem } from './../ChecklistItem';

export default class DoneList extends Component {
  // TODO collapsible

  static propTypes = {
    doneTasks: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { doneTasks } = this.props;
    return (
      <div>
        <ul>
          {doneTasks.map(dt => (
            <ChecklistItem key={dt.id} text={dt.text} done={false} />
          ))}
        </ul>
      </div>
    );
  }
}
