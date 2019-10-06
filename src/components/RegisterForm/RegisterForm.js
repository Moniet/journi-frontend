import React, { useState } from 'react'
import API from '../../utils/API'
import styles from './RegisterForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Label from '../Label/Label'
import PasswordInput from '../PasswordInput/PasswordInput';
import Submit from '../Submit/Submit'
import { gql } from 'apollo-boost'
import { useMutation, useApolloClient } from 'react-apollo'

const CREATE_USER = gql`
        mutation CreateUser($name: String!, $username: String!, $password: String!) {
            createUser (name: $name, username: $username, password: $password) {
                errors,
                token,
            }
        }
    `

const RegisterForm = ({ showError, setLoggedIn, loggedIn, client }) => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('') 

    const [createUser, { loading, error, data }] = useMutation(CREATE_USER, 
          {
            onCompleted({ createUser }) {
              localStorage.setItem('token', createUser.token);
              setLoggedIn(!loggedIn)
            }
          });

    const handleSubmit = e => {
        e.preventDefault()
        createUser({ variables: {name, username, password} });
        if (loading) {
            document.querySelector('#loader').classList.remove('hide-loader');
            document.querySelector('#loader').classList.add('show-loader');
        } 
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <Label value={ 'Name' } inputId="name"/>
            <TextInput setValue={ setName } value={ name } inputId="name" />
            <Label value={ 'Username' } inputId="username"/>
            <TextInput setValue={ setUsername } value={ username } inputId="username" />
            <Label value={ 'Password' } inputId="password" />
            <PasswordInput setValue={ setPassword } value={ password } inputId="password" />
            <Submit/>
        </form>
    )
}

export default RegisterForm