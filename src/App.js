import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Content from './Content';
import GetApi from './GetData';
import ShowName from './ShowName'
class App extends React.Component {
  render() {
    return (
      <div>
      <Welcome name="PASUPOL BUNSAEN" />
      <ShowName />
      <Counter />
      <Content />
        <br/>
      <GetApi />

      </div>
    )
  }
}

const Welcome=(props)=>
      <h1>Hello, {props.name}</h1>
export default App;
