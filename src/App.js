import React, { useState, useEffect } from 'react'
import './styles/reset.scss'
import './App.scss'
import API from './utils/API'
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

  const removePost = id => {
      setPosts([...posts.filter(post => post.id !== id)])
  }

  useEffect(() => {
    if (loggedIn) {
      API.getPosts(token).then(data => { 
        if (data.posts.data) 
          setPosts(data.posts.data)
        else
          setPosts(data.posts)        
      })
    }
    if (!loggedIn) setPosts([]);
  }, [loggedIn])

  console.log(`
   posts: ${posts.toString()}
   logged in: ${loggedIn}
   toke: ${token}
  `)

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
