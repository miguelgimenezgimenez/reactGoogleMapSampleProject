
import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { existingUser } from '../redux/actions';
import Login from '../components/Login';

import '../Styles/LoginFormStyle.css';


class ExistingUserForm extends Component {
  constructor () {
    super();
    this.state = {
      emailAddress: '',
      password: '',
    };
  }
  submit() {
    this.props.existingUser(this.state);
  }
  moveLabel(tag){
    if (this.state[tag]==='') {
      return "";
    } else {
      return "active highlight"
    }
  }
  render () {
    return (
      <Login>
        <h1>Welcome Back!</h1>

        <div className="field-wrap">
          <label className={this.moveLabel.bind(this)("emailAddress")}>
            Email Address<span className="req">*</span>
          </label>
          <input
            onChange={(event) => this.setState({emailAddress:event.target.value})}
            type="email"/>
          </div>

          <div className="field-wrap">
            <label className={this.moveLabel.bind(this)("password")}>
              Password
              <span className="req">*</span>
            </label>
            <input
              onChange={(event) => this.setState({password:event.target.value})}
              type="password"
            />
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          <button
            className="button button-block"
            onClick={()=>this.submit()}
            >Log In
          </button>
        </Login>);

      }
    }
    const mapStateToProps = (state) => ({});
    const mapDispatchToProps = (dispatch) => ({
      existingUser: (data) => dispatch(existingUser(data)),

    });
    export default connect(mapStateToProps, mapDispatchToProps)(ExistingUserForm);
