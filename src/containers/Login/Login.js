import React, {useRef} from 'react'
import { Route, Redirect } from 'react-router-dom'
import styles from './Login.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import Loader from '../../components/Loader/Loader'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

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