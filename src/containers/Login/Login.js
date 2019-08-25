import React from 'react'
import styles from './Login.module.scss'
import Layout from '../Layout/Layout'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = ({ setPosts, loggedIn }) => (
    <Layout loggedIn={ loggedIn }>
        <div className={styles.container}>
            <LoginForm setPosts={ setPosts }/>
        </div>
    </Layout>
)

export default Login