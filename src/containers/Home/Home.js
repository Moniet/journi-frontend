import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Landing from '../../components/Landing/Landing'

const Home = ({ posts, setPosts, loggedIn, removePost }) => (
    loggedIn
    ? <Dashboard setPosts={ setPosts } posts={ posts } removePost={ removePost } />
    : <Landing />
)


 

export default Home