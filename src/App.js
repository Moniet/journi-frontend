import React, { useState, useEffect } from 'react'
import './styles/reset.scss'
import './App.scss'
import API from './utils/API'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Home from './containers/Home/Home'
import Layout from './containers/Layout/Layout';
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const GET_POSTS = gql`
  {
    posts {
      id, 
      title,
      body
    }
  }
`


function App() {
  const token = localStorage.getItem('token')
  const isLoggedIn = token !== 'false' && token !== ''
  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(isLoggedIn)

  const { loading, error, data } = useQuery(GET_POSTS) 

  const removePost = id => {
      setPosts(posts.filter(post => post.id !== id))
  }

  useEffect(() => {
    if (data) setPosts(data.posts);
    if (!loggedIn) setPosts([]);
  }, [loggedIn, data])

  return (
    <BrowserRouter>
      <Layout loggedIn={isLoggedIn} setLoggedIn={ setLoggedIn }>
        <Route exact path='/' render={ () => <Home loggedIn={ loggedIn } posts={ posts } setPosts={ setPosts } removePost={ removePost } /> } />
        <Route exact path="/login" render={ () => <Login loggedIn={ loggedIn } setPosts={ setPosts } setLoggedIn={ setLoggedIn } /> } />
        <Route exact path="/register" render={ () =>  <Register loggedIn={ loggedIn } setLoggedIn={ setLoggedIn } /> } />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
