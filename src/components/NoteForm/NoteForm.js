import React, { useState} from 'react'
import styles from './NoteForm.module.scss'
import API from '../../utils/API'
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
                setPosts([
                    post.data,
                    ...posts
                ])
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