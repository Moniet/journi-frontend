import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './LoginForm.module.scss'
import TextInput from './TextInput/TextInput'
import Label from './Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';

const LoginForm = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        API.loginUser(username, password)
    }

    return (
        <form onSubmit={ handleSubmit } >
            <Label value={ 'Username' } />
            <TextInput setValue={ setUsername } value={ username } />
            <Label value={ 'Password' } />
            <PasswordInput setValue={ setPassword } value={ password } />
        </form>
    )
}

export default LoginForm