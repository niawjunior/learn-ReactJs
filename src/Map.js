import React from 'react'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default class Map extends React.Component {
  render() {
    return (
      <div>
        <TableList list={ numbers }/>
      </div>
    )
  }
}

const TableList=(props)=>
props.list.map((list) =>{
  return  <h1 style={{ display:'inline'}}>{list}</h1>
})
