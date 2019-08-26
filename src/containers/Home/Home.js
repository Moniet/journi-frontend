import React from 'react'
import Layout from '../Layout/Layout'
import Dashboard from '../../components/Dashboard/Dashboard'
import Landing from '../../components/Landing/Landing'

const Home = ({ posts, setPosts }) => (
    <Dashboard setPosts={ setPosts } posts={ posts } />
)

// { isLoggedIn ? <Dashboard /> : <Landing /> } 

export default Home