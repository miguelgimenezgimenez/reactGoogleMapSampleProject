import { CALL_API } from './apiMiddleWare';


//======================================================
// User actions
//======================================================
export const login = (user) => {
  return {
    type: 'LOGIN',
    user:user,
  }
};

export const existingUser = (data) => ({
  type: 'EXISTING_USER',
  [CALL_API]:{
    endpoint:'/login',
    method:'POST',
    data
  }

});

export const newUser = (data) => {
  return {
    type: 'NEW_USER',
    [CALL_API]:{
      endpoint:'/newuser',
      method:'POST',
      data
    }

  }
};
