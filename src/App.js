import React from 'react';
import './App.css';
import Counter from './Counter';
import Content from './Content';
import GetApi from './GetData';
import ShowName from './ShowName'
import Clock from './Clock';
import Event from './Event';
class App extends React.Component {
  render() {
    return (
      <div>
        <Event />
        <Clock />
        <Welcome name="PASUPOL BUNSAEN" />
        <ShowName />
        <Counter />
        <Content />
        <GetApi />
        </div>
    )
  }
}



const Welcome=(props)=>
      <h1>Hello, {props.name}</h1>
export default App;
