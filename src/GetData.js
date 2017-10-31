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

const TableApi=(props)=>
      <tr>
        <td>{props.data_table.title}</td>
        <td>{props.data_table.author}</td>
        <td>{props.data_table.points}</td>
      </tr>

