import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
//Local imports
import NewUserForm from './containers/NewUserForm';
import ExistingUserForm from './containers/ExistingUserForm';
import './App.css';
import Login from './components/Login';
// import AllActivities from './Main/Containers/AllActivities';
import Session from './containers/Session';
import Activities from './containers/Activities';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path='/' component={NewUserForm}/>
          <Route path='/existing' component={ExistingUserForm}/>
          <Route path='/session' component={Session}>
              <Route path='/all' component={Activities}/>
            {/* <Route path='/createactivity' component={Form}/> */}
      </Route>
    </Router>
  </div>)
}
}
export default App;
