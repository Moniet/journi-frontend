import React from 'react'
import styles from './Grid.module.scss'
import Post from '../Post/Post'

const Grid = ({ posts }) => (
    <div className={ styles.grid }>
        { posts ? posts.map((post, i) => <Post key={i} post={ post }/> ) : '' }
    </div>
)

export default Grid