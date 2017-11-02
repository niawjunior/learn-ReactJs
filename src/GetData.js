import React from 'react'
import axios from 'axios'
export default class GetApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: []
    };
  }

  componentWillMount() {
    axios
      .get(`https://hn.algolia.com/api/v1/search`)
      .then(res => this.setState({ get: res.data.hits }))
      .catch(err => console.log(err))
  }
  render () {
    return (
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Points</th>
        </tr>
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
        <td style={{width:'80%'}}>{props.data_table.title}</td>
        <td>{props.data_table.author}</td>
        <td>{props.data_table.points}</td>
      </tr>

