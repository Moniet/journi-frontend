import React, { useState} from 'react'
import styles from './NoteForm.module.scss'
import API from '../../utils/API'
import Label from '../Label/Label'
import TextInput from  '../TextInput/TextInput'
import Textarea from '../Textarea/Textarea'
import Submit from '../Submit/Submit'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

const CREATE_POST = gql`
    mutation CreatePost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
            post {
                id
                title
                body
            }
        }
    }
`

const NoteForm = ({ setPosts, posts }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [createPost] = useMutation(CREATE_POST, {
        onCompleted({ createPost }) {
            setPosts([...posts, createPost.post])
            setTitle('')
            setBody('')
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        createPost({ variables: {title, body} })
    }

    return ( 
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <Label inputId="title" value="Title"/>
            <TextInput inputId="title" setValue={ setTitle } value={ title }/>
            <Label inputId="body" value="Body"/>
            <Textarea inputId="body" setValue={ setBody } value={ body } />
            <Submit />
        </form>
    )
}

export default NoteForm