import React, {Component} from 'react'
import axios from 'axios'
export default class GetApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://hn.algolia.com/api/v1/search`)
      .then(res => this.setState({ get: res.data.hits }))
      .catch(err => console.log(err))
  }
  render () {
    return (
      <table>
        <thead>
          <th>Title</th>
          <th>Author</th>
          <th>Points</th>
        </thead>
        <tbody>
         {
           this.state.get.map(( person ) => 
          <TableApi data_table = { person }/>
          )
        } 
        </tbody>
      </table>

    )
  }
}

class TableApi extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.data_table.title}</td>
        <td>{this.props.data_table.author}</td>
        <td>{this.props.data_table.points}</td>
      </tr>
    )
  }
}