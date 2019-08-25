import React from 'react'
import styles from './Dashboard.module.scss'
import NoteForm from '../NoteForm/NoteForm'
import Grid from '../Grid/Grid'

// const Header = () => (

// )

const Dashboard = ({ posts, setPosts }) => (
    <div className={styles.container}>
        {/* header */}
        <NoteForm setPosts={ setPosts} posts={ posts } />
        <Grid posts={ posts } />
    </div>
)

export default Dashboard