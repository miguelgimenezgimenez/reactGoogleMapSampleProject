import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../redux/actions';
import { browserHistory} from 'react-router';

import Login from '../components/Login';
import '../Styles/LoginFormStyle.css';


class NewUserForm extends Component {
  constructor () {
    super();
    this.state = {
      emailAddress:'',
      firstName:'',
      lastName:'',
      password:''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.email) {
      browserHistory.push('/session/');

    }
  }

  submit() {
    this.props.newUser(this.state);
  }


  moveLabel(tag) {
    if (this.state[tag]==='') {
      return '';
    } else {
      return "active highlight"
    }
  }

  render () {
    return (
      <Login>
        <div id="signup">
          <h1>Sign Up for Free</h1>
          <div className="top-row">
            <div className="field-wrap">
              <label className={this.moveLabel.bind(this)("firstName")}>
                First Name<span className="req">*</span>
              </label>
              <input
                onChange={(event, firstName) => this.setState({firstName:event.target.value})} type="text"/>
              </div>

              <div className="field-wrap">
                <label className={this.moveLabel.bind(this)("lastName")}>
                  Last Name<span className="req">*</span>
                </label>
                <input
                  onChange={(event, lastName) => this.setState({lastName:event.target.value})}               type="text"/>
                </div>
              </div>

              <div className="field-wrap">
                <label className={this.moveLabel.bind(this)("emailAddress")}>
                  Email Address<span className="req">*</span>
                </label>
                <input
                  onChange={(event, emailAddress) => this.setState({emailAddress:event.target.value})}                type="email"/>
                </div>

                <div className="field-wrap">
                  <label className={this.moveLabel.bind(this)("password")}> Set A Password<span className="req">*</span>
                </label>
                <input
                  onChange={(event, password) => this.setState({password:event.target.value})}
                  type="password"/>
                </div>

                <button type="submit" className="button button-block" onClick={()=>this.submit()}>Get Started</button>
              </div>
            </Login>
          )
        }
      }
      const mapStateToProps = (state) => ({
        user: state.userLogged,
        
      });
      const mapDispatchToProps = (dispatch) => ({
        newUser: (data) => dispatch(newUser(data)),

      });
      export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
