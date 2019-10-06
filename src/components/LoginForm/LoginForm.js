import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './LoginForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';
import Submit from '../Submit/Submit'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'

const LOGIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            user {
                posts {
                    id, 
                    title,
                    
                }
            }
            token,
            errors
        }
    }
`

const LoginForm = ({ setPosts, setLoggedIn, loggedIn, showError }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginUser, { loading, error } ] = useMutation(LOGIN_USER, {
        onCompleted({ loginUser }) {
            localStorage.setItem('token', loginUser.token)
            setPosts(loginUser.posts)
            setLoggedIn(true)
        }
    });

    if (loading) {
        document.querySelector('#loader').classList.remove('show-loader')
        document.querySelector('#loader').classList.add('hide-loader')
    }

    if (error) showError(error);

    const handleSubmit = e => {
        e.preventDefault()
        loginUser({variables: { username, password }})
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <Label value={ 'Username' } inputId="username"/>
            <TextInput setValue={ setUsername } value={ username } inputId="username" />
            <Label value={ 'Password' } inputId="password" />
            <PasswordInput setValue={ setPassword } value={ password } inputId="password" />
            <Submit />
        </form>
    )
}

export default LoginForm