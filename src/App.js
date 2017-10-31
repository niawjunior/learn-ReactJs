import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Table  } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
      <Clock />
      <Counter />
      <Content />
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

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {data: new Date()};
  }
  render() {
    return (
      <div>
       <h1>{this.state.data.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "text",
          age: 20
        },
        {
          id: 2,
          name: "text",
          age: 22
        },
        {
          id: 3,
          name: "text",
          age: 23
        },
        {
          id: 4,
          name: "text",
          age: 24
        }
      ]
    }
  }
  render () {
    return (
      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </thead>
        <tbody>
         {
           this.state.data.map(( person ) => 
          <TableRow data_table = { person }/>
          )
        } 
        </tbody>
      </table>

    )
  }
}

class TableRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.data_table.id}</td>
        <td>{this.props.data_table.name}</td>
        <td>{this.props.data_table.age}</td>
      </tr>
    )
  }
}
export default App;
