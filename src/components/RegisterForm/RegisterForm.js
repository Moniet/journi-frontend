import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './RegisterForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';
import Submit from '../Submit/Submit'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        API.registerUser(username, password)
            .then(data => {
                setPassword('');
                setUsername('');
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <Label value={ 'Name' } inputId="name"/>
            <TextInput setValue={ setName } value={ name } inputId="name" />
            <Label value={ 'Username' } inputId="username"/>
            <TextInput setValue={ setUsername } value={ username } inputId="username" />
            <Label value={ 'Password' } inputId="password" />
            <PasswordInput setValue={ setPassword } value={ password } inputId="password" />
        </form>
    )
}

export default RegisterForm
    