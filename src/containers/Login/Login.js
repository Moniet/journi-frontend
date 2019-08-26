import React, {useRef} from 'react'
import { Route, Redirect } from 'react-router-dom'
import styles from './Login.module.scss'
import Layout from '../Layout/Layout'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = ({ setPosts, setLoggedIn, loggedIn }) => {
    const errorDiv = useRef();
    const showError = (error) => {
        errorDiv.current.classList.add('show')
        errorDiv.current.textContent = error;
    }

    return (
        <div className={styles.container}>
            <div ref={errorDiv} className="error"></div>
            <LoginForm setPosts={ setPosts } setLoggedIn={ setLoggedIn } loggedIn={ loggedIn }  showError={ showError }/>
        </div>
    )
}

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