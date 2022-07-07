import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../src/components/core/Navbar.jsx';
import Home from '../src/components/Home.jsx';
import Quiz from '../src/components/Quiz.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
