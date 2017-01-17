// REMOVE-START
import { combineReducers } from 'redux';
import { browserHistory} from 'react-router';


const userLogged = (state={},action) => {
  switch (action.type) {
    // case 'GET_EVENTS_REQUEST':
    // case 'NEW_USER_REQUEST':
    case 'EXISTING_USER_REQUEST':
    return Object.assign({}, {loading: true})
    case 'EXISTING_USER_SUCCESS':
    return Object.assign({},{loading:false});
    case 'LOGIN':
    browserHistory.push('/session/');

    return Object.assign({},action.user,{loading:false});
  }
  return state;

};


const activities = (state=[],action) => {
  switch (action.type) {
    case 'ADD_ACTIVITIES':
    return action.data;
    default:
    return state
  }
};
// Combining both reducers
const reducers = combineReducers({
  userLogged,activities
});

export default reducers;
// REMOVE-END
