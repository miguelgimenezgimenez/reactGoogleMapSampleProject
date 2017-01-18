const API_ROOT = 'http://localhost:8008'

const apiCall = (endpoint, method='GET', data) => {
  const fullUrl = (endpoint.search('http') === -1) ? API_ROOT + endpoint : endpoint
  let body
  if (data) {
    body = JSON.stringify(data)
  }
  console.log(fullUrl, method);

  return fetch(fullUrl, {
    method,
    headers: {
      'Accept': 'application/json',
    },
    body,
  })
  .then(response =>
    response.json()
    .then(json => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
  )
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, method, data }= callAPI
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }


  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({ type: action.type + '_REQUEST' }))


  return apiCall(endpoint, method, data)
  .then(
    response => {
      console.log(response);
      next(actionWith({
        response,
        type: action.type + '_SUCCESS'
      }))
      if (action.success) {
        if (Array.isArray(response)){
          store.dispatch(action.success(response));
        } else {
          response = response.venues.map((event))
        }
      }
    }
  )
  .catch(
    error => next(actionWith({
      type: action.type + '_FAILURE',
      error: error.message || 'Something bad happened'
    }))
  )
}
