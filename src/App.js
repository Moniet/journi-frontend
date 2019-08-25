import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './styles/reset.scss'
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import API from './utils/API.js'

function App() {
  const token = localStorage.getItem('token')
  const isLoggedIn = token !== 'false' && token !== undefined ? true : false
  const [posts, setPosts] = useState([])
  console.log(token);
  

  useEffect(() => {
    if (isLoggedIn) {
      API.getPosts(token).then(data => { if (data.posts.data.length > 0) setPosts(data.posts.data) });
    }
  }, [])

  return (
    <BrowserRouter>
      {/* <Route exact path='/' /> */}
      <Route exact path="/login" render={() => <Login loggedIn={ isLoggedIn } setPosts={ setPosts } /> } />
      <Route exact path="/register" render={ () =>  <Register loggedIn={ isLoggedIn } /> } />
    </BrowserRouter>
  );
}

export default App;
