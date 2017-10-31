import React, {Component} from 'react';
 export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "text",
          age: 20
        },
        {
          id: 2,
          name: "text",
          age: 22
        },
        {
          id: 3,
          name: "text",
          age: 23
        },
        {
          id: 4,
          name: "text",
          age: 24
        }
      ]
    }
  }
  render () {
    return (
      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </thead>
        <tbody>
         {
           this.state.data.map(( person ) => 
          <TableRow data_table = { person }/>
          )
        } 
        </tbody>
      </table>

    )
  }
}

class TableRow extends React.Component {
  render () {
    return (

      <tr>
        <td>{this.props.data_table.id}</td>
        <td>{this.props.data_table.name}</td>
        <td>{this.props.data_table.age}</td>
      </tr>
    )
  }
}