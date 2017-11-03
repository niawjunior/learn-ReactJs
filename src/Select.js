import React from 'react'
import { Select,Button,Form, Input } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'number one'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    alert(this.state.value);
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
    <div>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          <select  style={{ width: '300ox' }} onChange={this.handleChange}>
            <option value="number one">{this.state.value}</option>
            <option value="number two">number two</option>
            <option value="number three">number three</option>
          </select>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    </div>
    )
  }
}