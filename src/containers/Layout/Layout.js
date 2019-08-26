import React from 'react'
import styles from './Layout.module.scss'
import Nav from '../../components/Nav/Nav'

const Layout = ({ children, loggedIn, setLoggedIn }) => (
    <>
        <Nav loggedIn={ loggedIn } setLoggedIn={ setLoggedIn } />
        <div className={styles.container}>
            { children }
        </div>
    </>
)

export default Layout