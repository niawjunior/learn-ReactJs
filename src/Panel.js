import React from 'react'
import './App.css';
function Contacts() {
  return <div className="Contacts">
  <h1>Contacts</h1>
  </div>
}

function Chat() {
  return <div className="Chat">
  <h1>Chat</h1>  
  </div>
}


function SplitPane(props) {
  return (
    <div className="Split" >
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
  );
}

export default class  Panel extends React.Component {
  render() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }
}
