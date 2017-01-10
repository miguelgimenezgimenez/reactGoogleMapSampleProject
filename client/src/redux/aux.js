function createApiMiddleware(extraArgument) {
  return function(store) {
    let dispatch = store.dispatch,
    getState = store.getState;
    return function(next) {
      return function(action) {
        if (action.method === 'POST') {
          next({type: 'VALIDATING_USER'});
          return postRequest(dispatch, action);
        }
        if (action.method === 'GET') {
          // next({type: 'VALIDATING_USER'});
          return getRequest(dispatch, action);
        }
        return next(action);
      };
    };
  };
}

function postRequest(dispatch, action) {
  const data = action.data;
  fetch(`http://localhost:8008/${action.url}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data})
  })
  .then(res => res.json())
  .then(data => {
    dispatch(action.success(data));
  })
  .catch(er => {
    console.log(er);
  });
}

function getRequest(dispatch, action) {
  const data = action.data;
  fetch(`http://localhost:8008/${action.url}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    dispatch(action.success(data));
  })
  .catch(error => {
    console.log(error);
  })
}
const apiMiddleWare = createApiMiddleware();
apiMiddleWare.withExtraArgument = createApiMiddleware;
export default apiMiddleWare;
