import React from 'react'
import styles from './Dashboard.module.scss'
import NoteForm from '../NoteForm/NoteForm'
import Grid from '../Grid/Grid'

const Dashboard = ({ posts, setPosts, removePost }) => (
    <div className={styles.container}>
        <h2 className={styles.title}>Create a Note</h2>
        <NoteForm setPosts={ setPosts } posts={ posts } />
        <Grid posts={ posts }  setPosts={ setPosts } removePost={ removePost }/>
    </div>
)

export default Dashboard