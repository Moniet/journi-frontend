import React from 'react'
import styles from './Register.module.scss'
import Layout from '../Layout/Layout'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

const Register = () => (
    <Layout>
        <div className={styles.container}>
            <RegisterForm />
        </div>
    </Layout>
)

export default Register