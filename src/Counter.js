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
        <h1 className="hello">Hello</h1>
        <center>
        <Button type="primary" onClick={this.count}>+</Button>
        </center>
        <p className="hello">STATE</p>
        <h1 className="hello">{this.state.value}</h1>
        <p className="hello">PROPS</p>
        <Show  count={this.state.value}/>
      </div>
    )
  }
}


const Show=(props)=>
      <div>
        <h1 className="hello">{props.count}</h1>
      </div>