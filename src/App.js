import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default App;
