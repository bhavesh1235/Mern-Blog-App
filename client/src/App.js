import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';

import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:64}}>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/details'>
            <DetailView/>
          </Route>
          <Route path='/create'>
            <CreateView/>
          </Route>
          <Route path='/update'>
            <CreateView/>
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
