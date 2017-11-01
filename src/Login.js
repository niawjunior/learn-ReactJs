import React from 'react'
import { Button } from 'antd'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLogin: false
    };
    this.Check = this.Check.bind(this);
  }
  Check() {
    this.setState(pre =>({
      checkLogin: !pre.checkLogin
    }))
  }
  render() {
    return (
      <div>
      <Button 
        onClick={ this.Check } 
        style={{ marginTop: 20 }} 
        type={ this.state.checkLogin ? 'primary' : 'danger' } 
        size="large" >{ this.state.checkLogin ? 'Sign in' : 'Sign Out' }
      </Button>
      <Greeting isLoggedIn={ this.state.checkLogin } />
      </div>
    )
  }
}

const Welcome=()=>
  <h1>Welcome back!</h1>

const SignIn=()=>
  <h1>Please sign in.</h1>

const Greeting=(props)=> {
  if (!props.isLoggedIn) {
    return <Welcome />;
  }
    return <SignIn />;
}
