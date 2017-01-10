import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'semantic-ui-css/semantic.min.css';
import reducers from './redux/reducers';
import App from './App';
import './index.css';
import apiMiddleWare from './redux/apiMiddleWare';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(apiMiddleWare)));


  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
