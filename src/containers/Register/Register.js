import React, { useRef } from 'react'
import { Route, Redirect } from 'react-router-dom' 
import styles from './Register.module.scss'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Loader from '../../components/Loader/Loader'

const RegisterPage = ({ setLoggedIn, loggedIn }) => {
    const errorDiv = useRef();
    const showError = (error) => {
        errorDiv.current.classList.add('show');
        errorDiv.current.textContent = error;
    }

    return (
        <div className={ styles.container }>
            <div ref={ errorDiv } className="error"></div>
            <RegisterForm showError={ showError }  loggedIn={ loggedIn } setLoggedIn={ setLoggedIn } />
            <Loader />
        </div>
    )
}

const Register = ({ setLoggedIn, loggedIn }) => (
    <Route 
        exact path="/register" 
        render={() => (
        loggedIn ? 
        <Redirect to='/' />
        : <RegisterPage setLoggedIn={ setLoggedIn } loggedIn={ loggedIn }/>
        )}
    />
)

export default Register