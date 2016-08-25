import React from 'react';
import App from './components/App.jsx';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/App.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';
import {green800} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,

  },
  appBar: {
    height: 100,
    color: green800,
  },
});

injectTapEventPlugin();

render((
  <MuiThemeProvider muiTheme={muiTheme}>
   <App/>

  </MuiThemeProvider>
), document.getElementById('app'))
