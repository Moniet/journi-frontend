import React from 'react'
import styles from './Dashboard.module.scss'
import Layout from '../Layout/Layout'

const Dashboard = ({ posts, setPosts }) => (
    <Layout>
        <div className={styles.container}>
            {/* <PostForm setPosts={ setPosts} /> */}
            {/* <Grid posts={ posts } /> */}
        </div>
    </Layout>
)

export default Dashboard