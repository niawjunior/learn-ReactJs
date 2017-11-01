import React from 'react';
import {Button} from 'antd';
import './App.css';
export default class Counter extends React.Component {

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
        <Button type="primary" onClick={this.count}>+</Button>
        <h3> Value From State {this.state.value}</h3>
        <Show  count={this.state.value}/>
      </div>
    )
  }
}


const Show=(props)=>
      <div>
        <h3>Value From Props {props.count}</h3>
      </div>