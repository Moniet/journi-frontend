import React, { useState} from 'react'
import styles from './NoteForm.module.scss'
import API from '../../utilities/API'
import Label from '../Label/Label'
import TextInput from  '../TextInput/TextInput'
import Textarea from '../Textarea/Textarea'
import Submit from '../Submit/Submit'


const NoteForm = ({ setPosts, posts }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        API.createPost(token, title, body)
            .then(post => {
                if (post.data) setPosts([ post.data, ...posts]);
                // if (!post.data) setPosts([...posts])
                // console.log(post)
            })
    }

    return ( 
        <form onSubmit={ handleSubmit }className={ styles.form }>
            <Label inputId="title" value="Title"/>
            <TextInput inputId="title" setValue={ setTitle } value={ title }/>
            <Label inputId="body" value="Body"/>
            <Textarea inputId="body" setValue={ setBody } value={ body } />
            <Submit />
        </form>
    )
}

export default NoteForm