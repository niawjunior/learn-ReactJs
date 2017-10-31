import React,{Component} from 'react';

export default class ShowName extends Component {

constructor(props) {
  super(props);
  
  this.state = {
    value: ''
  };
  this.Change = this.Change.bind(this);
  this.Show = this.Show.bind(this);
}

Change(e) {
  this.setState({
    value: e.target.value
  });
  console.log(e.target.value);

}
Show(e) {
  alert(this.state.value);
  e.preventDefault();
}
  render() {
    return (
      <div>
       <form onSubmit={this.Show}>
       <input type="text" value={this.state.value} placeholder="input your name" onChange={this.Change}/>
       <h1>{this.state.value}</h1>
       <input type="submit" value="Submit" />
       </form>
      </div>
    )
  }

}