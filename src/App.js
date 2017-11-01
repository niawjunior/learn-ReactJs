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
import Map from './Map';
import { Card } from 'antd';
class App extends React.Component {

  render() {
    return (
      <div className="container">
      <div style={{ background: '#ECECEC', padding: '20px' }}>
      <Clock/>
      <Card title="Text" bordered={false} style={{ marginTop:5}}>
      <Welcome name="PASUPOL BUNSAEN" />
      </Card>
      <Card title="Map" bordered={false} style={{ marginTop:5}}>
      <Map />
      </Card>
      <Card title="Login" bordered={false} style={{ marginTop:5 }}>
      <Login />
      </Card>
      <Card title="Handle Click" bordered={false} style={{marginTop:5 }}>
      <Event />
      </Card>
      <Card title="Toggle Click " bordered={false} style={{marginTop:5 }}>
      <Toggle />
      </Card>
      <Card title="Input Name " bordered={false} style={{marginTop:5 }}>
      <ShowName />
      </Card>
      <Card title="Counter " bordered={false} style={{marginTop:5 }}>
      <Counter />
      </Card>
      <Card title="Data Table | Static" bordered={false} style={{marginTop:5 }}>
      <Content />
      </Card>
      <Card title="Data Table | Api" bordered={false} style={{marginTop:5 }}>
        <GetApi />
      </Card>
    </div>
        </div>
    )
  }
}



const Welcome=(props)=>
      <h1>Hello, {props.name}</h1>
export default App;
