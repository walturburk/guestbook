import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("wtf? "+ this.state.value);
    event.preventDefault();
  }
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

render() {
  return (
    <div>
      <h1>Da Guestbook</h1>
      <div className="card">
        <h3>Enter your shit</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} type="text" />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
  
}

export default App;
