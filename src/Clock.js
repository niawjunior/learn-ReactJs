import React from 'react';
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    setInterval(()=>{this.tick(),1000})
  }
  
  tick() {
    this.setState({time:new Date()})
  }
  render() {
    return (
      <FormattedDate time={this.state.time} />
    )
  }
}

const FormattedDate = (props) => 
  <h2 style={{textAlign:'center',fontSize:25,color:'red'}}> 
    {props.time.toLocaleTimeString()}
  </h2>;
