import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = () => (
    
    <nav role="navigation" className={styles.nav}>
        
            <Link to="/" className={styles.brand}>
                <h1>Journi</h1>
                <h2>Digital Journal</h2>
            </Link>
        
        <ul className={styles.navList}>
            <li className={styles.listItem}><Link to="/login"> Login </Link></li>
            <li className={styles.listItem}><Link to="/register"> Register </Link></li>
        </ul>
            
    </nav>
)

export default Nav