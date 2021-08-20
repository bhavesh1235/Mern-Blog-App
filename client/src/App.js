import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import AppWithRouterAccess from './AppWithRouterAccess';

// import Header from './components/Header';
// import Home from './components/home/Home';
// import DetailView from './components/post/DetailView';
// import CreateView from './components/post/CreateView';
// import UpdateView from './components/post/UpdateView';

function App() {
  return (
    <BrowserRouter>
      <AppWithRouterAccess/>
      {/* <Header/>
      <Box style={{marginTop:64}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id' component={DetailView} />
          <Route path='/create' component={CreateView} />
          <Route path='/update/:id' component={UpdateView} />
        </Switch>
      </Box> */}
    </BrowserRouter>
  );
}

export default App;
