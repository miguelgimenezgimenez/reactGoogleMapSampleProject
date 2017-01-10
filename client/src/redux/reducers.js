// REMOVE-START
import { combineReducers } from 'redux';
import { browserHistory} from 'react-router';


const userLogged = (state={},action) => {
  switch (action.type) {
    case 'GET_EVENTS_REQUEST':
        case 'NEW_USER_REQUEST':
        case 'EXISTING_USER_REQUEST':
        return Object.assign({}, {loading: true})

        case 'LOGIN_SUCESS_SUCCESS':
        console.log(action);
        return Object.assign({},{loading:false});


  }
  return state;

};


// Combining both reducers
const reducers = combineReducers({
  userLogged
});

export default reducers;
// REMOVE-END
