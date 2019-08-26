import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './styles/reset.scss'
import './App.scss'
import API from './utils/API.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Home from './containers/Home/Home'
import Layout from './containers/Layout/Layout';


function App() {
  const token = localStorage.getItem('token')
  const isLoggedIn = token !== 'false' && token ? true : false
  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(isLoggedIn)

  useEffect(() => {
    if (loggedIn) {
      API.getPosts(token).then(data => { if (data) setPosts(data.posts.data) });
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout loggedIn={isLoggedIn}>
        <Route exact path='/' render={ () => <Home loggedIn={ isLoggedIn } posts={ posts } setPosts={ setPosts } /> } />
        <Route exact path="/login" render={() => <Login loggedIn={ loggedIn } setPosts={ setPosts } setLoggedIn={ setLoggedIn } /> } />
        <Route exact path="/register" render={ () =>  <Register loggedIn={ isLoggedIn } /> } />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
