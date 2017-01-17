import { CALL_API } from './apiMiddleWare';


//======================================================
// USER ACTIONS
//======================================================
export const login = (user) => {
  return {
    type: 'LOGIN',
    user:user,
  }
};

export const existingUser = (data) => ({
  type: 'EXISTING_USER',
  success:login,
  [CALL_API]:{
    endpoint:'/login',
    method:'POST',
    data
  }
});

export const newUser = (data) => {
  return {
    type: 'NEW_USER',
    success:login,
    [CALL_API]:{
      endpoint:'/newuser',
      method:'POST',
      data
    }
  }
};

//======================================================
// ACTIVITIES ACTIONS
//======================================================
export const addActivities = (data) =>{
  return {
    type: 'ADD_ACTIVITIES',
    data
  }
}

export const fetchActivities = (path) => {
  return {
    type: 'FETCH_ACTIVITIES',
    success:addActivities,
    [CALL_API]:{
      endpoint:`${path}`
    }
  }
};
export const createActivity = (data) => {
  return {
    type: 'CREATE_ACTIVITY',
    success:login,
    [CALL_API]:{
      endpoint:'/createActivity',
      method:'POST',
      data
    }
  }
};
