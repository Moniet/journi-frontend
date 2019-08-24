import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './LoginForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        API.loginUser(username, password)
            .then(data => {
                setPassword('');
                setUsername('');
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={ handleSubmit } >
            <Label value={ 'Username' } />
            <TextInput setValue={ setUsername } value={ username } />
            <Label value={ 'Password' } />
            <PasswordInput setValue={ setPassword } value={ password } />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LoginForm