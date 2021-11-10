import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react'
import Dashboard from './Pages/Dashboard'
import NbackTest from './Pages/Tests/NbackTest';
import DDigitTest from './Pages/Tests/DDigitTest';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/dashboard/tests/n-back-test" exact component={NbackTest}/>
          <Route path="/dashboard/tests/digit-test" exact component={DDigitTest}/>
          <Route path="/dashboard" component={Dashboard}/>

        </Switch>
      </Router>
    )
}
export default App
