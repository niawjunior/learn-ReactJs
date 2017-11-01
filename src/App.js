import React from 'react';
import './App.css';
import Counter from './Counter';
import Content from './Content';
import GetApi from './GetData';
import ShowName from './ShowName'
import Clock from './Clock';
import Event from './Event';
import Toggle from './Toggle';
import Login from './Login';
class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Login />
        <Event />
        <Clock />
        <Toggle />
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
