import React, { Component } from 'react';
import { Task } from './components/Task';
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
      dataSize: 0,
      tasks: [],
    };
  }

  componentWillMount() {
    fetchHabiticaTasks()
      .then(
        result => result.json(),
      )
      .then(
        (res) => {
          this.setState({
            dataSize: res.data.length,
            tasks: sortTasks(res.data),
          });
        },
      );
  }

  renderTask() {
    if (this.state.dataSize > 0) {
      return (
        <Task task={this.state.tasks[0]} />
      );
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          I have {this.state.dataSize} tasks.
        </p>
        {this.renderTask()}
      </div>
    );
  }
}

export default App;
