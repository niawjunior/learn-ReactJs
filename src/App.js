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
      <ShowName />
      <Counter />
      <Content />
        <br/>
      <GetApi />
      </div>
    )
  }
}

export default App;
