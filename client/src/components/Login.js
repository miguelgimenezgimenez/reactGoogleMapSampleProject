import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

//Local Imports
import logo from '../logo.svg';

import '../Styles/LoginFormStyle.css';
import {greenBackground} from '../colors';

//New or existing user Buttons Component

const LinkToForms = (props) => <div>
  <ul className="tab-group">
    <li className="tab"><Link activeStyle={greenBackground}  to="/">Sign Up</Link></li>
    <li className="tab"><Link activeStyle={greenBackground} existingUser={this.props.existingUser} to="existing">Login</Link></li>
  </ul>
  {props.children}
</div>;


class Login extends Component {
  responseFacebook (response)  {
     console.log(response);
   }

  render () {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>q
          </div>
          <FacebookLogin
            appId="1618638748153455"
            autoLoad={true}
            fields="name,email,picture "
            scope="public_profile,user_friends"
            callback={this.responseFacebook} />
          <div className="form">
            <LinkToForms/>
            {this.props.children}
          </div>
        </div>
      );
    }
  }


  const mapStateToProps = (state) => ({
    // console.log(state);
    user:state.userLogged

  });
  const mapDispatchToProps = (dispatch) => ({
    existingUser: (data) => dispatch(existingUser(data)),

  });
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
