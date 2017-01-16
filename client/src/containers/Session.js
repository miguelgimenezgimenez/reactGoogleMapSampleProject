import React, {Component, PropTypes} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
//local imports

import Appbar from '../components/Appbar.js'

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Appbar user={this.props.user}/>
          {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userLogged,
  }
};
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
