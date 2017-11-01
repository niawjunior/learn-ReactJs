import React from 'react'
import { Button } from 'antd'

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    {console.log(this.state.isToggleOn)}
    this.setState(pre => ({
      isToggleOn: !pre.isToggleOn
    }));
  }
  render() {
    return (
      <Button onClick={this.handleClick} type={this.state.isToggleOn? 'primary' : 'danger'} shape="circle" size='large'>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
    );
  }

}