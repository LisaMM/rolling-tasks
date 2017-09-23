import React, { Component } from 'react';
import { Intro } from './components/Intro';
import logo from './logo.svg';
import './App.css';

function fetchHabiticaTasks() {
  const headers = {
    'x-api-key': '9ca67b5a-4f72-4200-81c8-345c534e6234',
    'x-api-user': 'c4484f97-e965-4748-8a09-467270680338',
  };
  console.log(headers);
  return fetch('https://habitica.com/api/v3/tasks/user', { headers });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSize: 0,
    };
  }

  componentWillMount() {
    fetchHabiticaTasks()
      .then(
        result => result.json(),
      )
      .then(
        (res) => {
          console.log(res);
          this.setState({
            dataSize: res.data.length,
          });
        },
      );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, Lisa!</h2>
        </div>
        <p className="App-intro">
          Size of my data is {this.state.dataSize};
        </p>
        <Intro name="Zsa-Zsa" secondName="Tiba" />
      </div>
    );
  }
}

export default App;
