import React, { useState } from 'react'
import styles from './Login.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => (
    <div className={ styles.container }>
        <LoginForm />
    </div>
)

export default Login