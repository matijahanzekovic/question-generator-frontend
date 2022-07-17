import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../src/components/core/Navbar.jsx';
import Home from '../src/components/Home.jsx';
import CreateQuiz from '../src/components/CreateQuiz.jsx';
import SolveQuiz from '../src/components/SolveQuiz.jsx';
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
        <Route exact path="/create-quiz">
          <CreateQuiz />
        </Route>
        <Route exact path="/solve-quiz">
          <SolveQuiz />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
