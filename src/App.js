import React from 'react';
import './App.css';
import Login from './components/login/login';
import DeviceView from './components/deviceView/deviceView';
import Error from './components/error/error';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Redirect to="login"/>
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/devices" component={DeviceView}/>
          <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
