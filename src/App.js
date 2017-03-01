import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import WeUI from 'react-weui';
import 'weui';
import 'react-weui/lib/react-weui.min.css';

const {Button, ButtonArea} = WeUI;

class Counter extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {count: 0};
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <ButtonArea>
          <Button onClick={e => this.handleClick(e)}>更新</Button>
        </ButtonArea>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
