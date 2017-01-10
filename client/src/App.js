import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
//Local imports
import NewUserForm from './components/NewUserForm';
import ExistingUserForm from './components/ExistingUserForm';
import './App.css';
import Login from './containers/Login';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path='/' component={Login}>
            <Route path='/newuser'
            component={NewUserForm}/>
            <Route path='/existing'
          component={ExistingUserForm}/>
        </Route>
      </Router>
    </div>
  );
}
}
export default App;
