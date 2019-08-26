import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './LoginForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';
import Submit from '../Submit/Submit'

const LoginForm = ({ setPosts, setLoggedIn, loggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        API.loginUser(username, password)
            .then(data => {
                localStorage.setItem('token', data.jwt)

                if (data.posts) {
                    setPassword('');
                    setUsername('');
                    setPosts(data.posts.data)
                }

                if (data) setLoggedIn(true);
            })
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