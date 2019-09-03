import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './LoginForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';
import Submit from '../Submit/Submit'

const LoginForm = ({ setPosts, setLoggedIn, loggedIn, showError }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        document.querySelector('#loader').classList.remove('hide-loader');
        document.querySelector('#loader').classList.add('show-loader');
        API.loginUser(username, password)
            .then(data => {
                if (data.posts && !data.errors) {
                    setPassword('');
                    setUsername('');
                    setPosts(data.posts.data)
                }  

                if (data.jwt) {
                    localStorage.setItem('token', data.jwt)
                    setLoggedIn(true)
                }
                
                if (data.errors) showError(data.errors);

                document.querySelector('#loader').classList.remove('show-loader');
                document.querySelector('#loader').classList.add('hide-loader');
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