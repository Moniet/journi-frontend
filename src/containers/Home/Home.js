import React from 'react'
import Layout from '../Layout/Layout'
import Dashboard from '../../components/Dashboard/Dashboard'
import Landing from '../../components/Landing/Landing'

const Home = ({ isLoggedIn, posts, setPosts }) => (
    <Layout>
        {/* { isLoggedIn ? <Dashboard /> : <Landing /> } */}
        <Dashboard setPosts={ setPosts } posts={ posts } />
    </Layout>
)

export default Home