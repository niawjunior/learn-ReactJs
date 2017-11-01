import React from 'react';
import { Button } from 'antd'
export default Event=()=> {
  function handleClick(e) {
    e.preventDefault();
    alert('clicked.');
  }
  return (
    <Button style={{marginTop:10}} type="primary" onClick={ handleClick }>Click Me</Button>
  )
}