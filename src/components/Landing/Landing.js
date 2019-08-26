import React from 'react'
import styles from './Landing.module.scss'
import { Link } from 'react-router-dom'

const Landing = () => (
    <div className={styles.container} >
        <div className={styles.greeting}>
            <h1 className={ styles.greetingTitle }> Welcome to Journi </h1>
            <Link to="/register">
                <div className={ styles.registerLink }>Register</div>
            </Link>
        </div>
    </div>
)

export default Landing
