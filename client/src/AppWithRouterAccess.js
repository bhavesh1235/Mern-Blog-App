import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
import {BrowserRouter, Switch, Route , useHistory} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

import Login from './account/Login.js';
import { oktaAuthConfig, oktaSignInConfig } from './config';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };
  
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path='/' component={Header} />
      <Box style={{marginTop:64}}>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
          <Route path='/login/callback' component={LoginCallback} />

          <Route path='/details/:id' component={DetailView} />
          <Route path='/create' component={CreateView} />
          <Route path='/update/:id' component={UpdateView} />
        </Switch>
      </Box>
    </Security>
  );
}

export default AppWithRouterAccess;
