import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import styles from './Login.module.scss'
import Layout from '../Layout/Layout'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = ({ setPosts, setLoggedIn, loggedIn }) => (
    <div className={styles.container}>
        <LoginForm setPosts={ setPosts } setLoggedIn={ setLoggedIn } loggedIn={ loggedIn } />
    </div>
)

const Login = ({ setPosts, loggedIn, setLoggedIn }) => (
    <Route 
        exact path="/login"
        render={() => (
            loggedIn ? 
            <Redirect to="/" />
            : <LoginPage loggedIn={ loggedIn } setPosts={ setPosts } setLoggedIn={ setLoggedIn }/>
        )}
    />
)

export default Login