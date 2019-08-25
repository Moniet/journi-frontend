import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './styles/reset.scss'
import './App.scss'
import API from './utils/API.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Home from './containers/Home/Home'


function App() {
  const token = localStorage.getItem('token')
  const isLoggedIn = token !== 'false' && token !== undefined ? true : false
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (isLoggedIn) {
      API.getPosts(token).then(data => { if (data.posts.data.length > 0) setPosts(data.posts.data) });
    }
  }, [])

  return (
    <BrowserRouter>
      <Route exact path='/' render={ () => <Home loggedIn={ isLoggedIn } posts={ posts } setPosts={ setPosts }/> } />
      <Route exact path="/login" render={() => <Login loggedIn={ isLoggedIn } setPosts={ setPosts } /> } />
      <Route exact path="/register" render={ () =>  <Register loggedIn={ isLoggedIn } /> } />
    </BrowserRouter>
  );
}

export default App;
