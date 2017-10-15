import React, { Component } from 'react';
import { Task } from './components/Task';
import { Button } from './components/Button';
import { DoneList } from './components/DoneList';
import './App.css';

function fetchHabiticaTasks() {
  const headers = {
    'x-api-key': '9ca67b5a-4f72-4200-81c8-345c534e6234',
    'x-api-user': 'c4484f97-e965-4748-8a09-467270680338',
  };
  return fetch('https://habitica.com/api/v3/tasks/user?type=todos', { headers });
}

function sortTasks(tasks = []) {
  return tasks.sort((a, b) => (
    new Date(a.date || '2020-01-01T01:00:00.000Z').getTime()
    - new Date(b.date || '2020-01-01T01:00:00.000Z').getTime()
  ));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      doneIds: [],
      activeTaskId: null,
    };
  }

  handleNextButtonClick = () => {
    const newDoneIds = [...this.state.doneIds, this.state.activeTaskId];
    const newTask = this.state.tasks.find(task => newDoneIds.indexOf(task.id) === -1);

    this.setState({
      doneIds: newDoneIds,
      activeTaskId: newTask.id,
    });
  };

  componentWillMount() {
    fetchHabiticaTasks()
      .then(
        result => result.json(),
      )
      .then(
        (res) => {
          const sortedTasks = sortTasks(res.data);
          const firstTask = sortedTasks
              .find(task => this.state.doneIds.forEach(id => id === task.id))
            || sortedTasks[0];
          this.setState({
            tasks: sortedTasks,
            activeTaskId: firstTask.id,
          });
        },
      );
  }

  fetchTaskById(id) {
    return this.state.tasks.find(task => task.id === id);
  }

  renderFirstContainer() {
    const firstTask = this.state.tasks
      .find(task => task.id === this.state.activeTaskId);
    return (
      <div>
        <Task task={firstTask} />
        <div className="App-actions">
          <Button name="Next" onButtonClick={this.handleNextButtonClick} />
        </div>
      </div>
    );
  }

  renderDoneContainer() {
    const doneTasks = this.state.doneIds.map(id => this.fetchTaskById(id));
    return (
      <div>
        <DoneList doneTasks={doneTasks} />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          I have {this.state.tasks.length} tasks.
        </p>
        {this.state.tasks.length > 0 ? this.renderFirstContainer() : 'Loading'}
        {this.renderDoneContainer()}
      </div>
    );
  }
}

export default App;
