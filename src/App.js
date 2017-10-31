import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
      <Counter />
      </div>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
    this.count = this.count.bind(this);
  }
  count() {
    this.setState({
      value: this.state.value + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Button type="primary" onClick={this.count}>+</Button>
        <h1>{this.state.value}</h1>
        <Show count={this.state.value}/>
      </div>
    )
  }
}

class Show extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}
export default App;
