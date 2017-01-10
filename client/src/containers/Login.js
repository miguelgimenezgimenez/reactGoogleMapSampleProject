import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//Local Imports
import logo from '../logo.svg';

import '../Styles/LoginFormStyle.css';
import {greenBackground} from '../colors';

//New or existing user Buttons Component

const LinkToForms = (props) => <div>
  <ul className="tab-group">
    <li className="tab"><Link activeStyle={greenBackground} to="newuser">Sign Up</Link></li>
    <li className="tab"><Link activeStyle={greenBackground} to="existing">Login</Link></li>
  </ul>
  {props.children}
</div>;


class Login extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div className="form">
          <LinkToForms/>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default Login;
