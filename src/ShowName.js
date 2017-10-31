import React,{Component} from 'react';
import { Form, Input,Button } from 'antd';
const FormItem = Form.Item;
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
  var show_value = (this.state.value ==''?"Empty":this.state.value);
  alert(show_value);
  e.preventDefault();
}
  render() {
    return (
      <div>
      <Form layout="inline" onSubmit={this.Show}>
        <FormItem>
          <Input type="text" value={this.state.value} placeholder="input your name" onChange={this.Change}/>
          <h1>{this.state.value}</h1>
        </FormItem>
        <FormItem>
          <Button type="primary" value="Submit" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      </div>
    )
  }
}