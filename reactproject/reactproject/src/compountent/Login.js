import { data, event } from 'jquery';
import React from 'react';
class Login extends React.Component {

  state = {
    Credentials: {username: '', password: ''}
  }

  login = event =>{
    console.log(this.state.Credentials);
    fetch('http://127.0.0.1:8000/auth/', {
      method : 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(this.state.Credentials)
    }).then(
      data => {
        console.log(data);
      }
    ).catch( error => console.console.error(error))
  }
  register =  event => {
    fetch( 'http://127.0.0.1:8000/api/user/',{
    method : 'POST',
    headers: {'content-type':'application/json'},
      body: JSON.stringify(this.state.Credentials)
    })
    .then(data => data.json())
    .then(
      data=>{
      console.log(data.token)
      }
    )
    .catch(error => console.error(error))
    }
  inputChanged = event => {
    const cred = this.state.Credentials;
    cred[event.target.name] = event.target.value;
    this.setState({Credentials: cred});
  }

  render() {
    return (
      <div>
      <h1> Login User </h1>

      <label>
        Username:
      <input type="text" name="username" 
      value={this.state.Credentials.username} 
      onChange={this.inputChanged}/>
      </label>
      <br/>
      <label>
        Password:
      <input type="password" name="password" 
      value={this.state.Credentials.password} 
      onChange={this.inputChanged}/>
      </label>
      <br/>
      <button onClick={this.login}> Login </button>
      <button onClick={this.register}> register </button>

      </div>
    );
  }
}
export default Login;