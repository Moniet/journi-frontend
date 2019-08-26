import React, { useState } from 'react'
import API from '../../utilities/API'
import styles from './RegisterForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';
import Submit from '../Submit/Submit'

const RegisterForm = ({ showError, setLoggedIn, loggedIn }) => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        API.registerUser(name, username, password)
            .then(data => {
                if (data.jwt) {
                    setLoggedIn(true)
                    localStorage.setItem('token', data.jwt)
                }

                if (data.errors) showError(data.errors)
            })
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <Label value={ 'Name' } inputId="name"/>
            <TextInput setValue={ setName } value={ name } inputId="name" />
            <Label value={ 'Username' } inputId="username"/>
            <TextInput setValue={ setUsername } value={ username } inputId="username" />
            <Label value={ 'Password' } inputId="password" />
            <PasswordInput setValue={ setPassword } value={ password } inputId="password" />
            <Submit />
        </form>
    )
}

export default RegisterForm
    