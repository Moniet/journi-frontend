import React, { useEffect, useRef, useState } from 'react'
import styles from './Post.module.scss'
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';

const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
        updatePost(id: $id, title: $title, body: $body) {
            message,
            errors
        }
    }
`

const DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
        deletePost(id: $id) {
            errors,
            message
        }
    }
`

const Post = ({ post, removePost }) => {
    const postEl = useRef(null)
    const postHeader = useRef(null)
    const postTitle = useRef(null)
    const postFooter = useRef(null)
    const postBody = useRef(null)
    const [editable, makeEditable] = useState(false)

    const [updatePost] = useMutation(UPDATE_POST, { onCompleted(data) { makeEditable(false) }});
    const [deletePost] = useMutation(DELETE_POST, { onCompleted(data) { removePost(post.id) }});
    const resize = () => {
        const height = postHeader.current.getBoundingClientRect().height + postFooter.current.getBoundingClientRect().height + postBody.current.getBoundingClientRect().height;
        const rowSpan = Math.ceil(height / 42);
        postEl.current.style.gridRow = `span ${rowSpan}`;
    }

    useEffect(() => {
        resize();
        postBody.current.contentEditable = editable;
        postTitle.current.contentEditable = editable;
        postTitle.current.style.boxShadow = editable ? '0px 0px 0px 2px pink' : 'none'; 
        postBody.current.style.boxShadow = editable ? '0px 0px 0px 2px pink' : 'none';
        if (editable) postEl.current.style.zIndex += 1000;
        if (!editable) postEl.current.style.zIndex = 0;
    }, [editable])    

    const savePost = () => {
        const title = postTitle.current.textContent
        const body = postBody.current.textContent
        updatePost({ variables: { id: post.id, title, body } })
    }

    return (
       post &&
        (<div ref={postEl} className={ styles.post }>
            <header ref={ postHeader } className={ styles.postHeader } >
                <h2 ref={ postTitle } className={ styles.postTitle }>{ post.title }</h2>
            </header>

            <div ref={postBody} className={ styles.postBody } >
                { post.body }
            </div>

            <footer ref={postFooter} className={styles.postFooter}>
                {   editable 
                    ? <button className={ styles.btnSave } onClick={ () => savePost() }>Save</button>
                    : <button className={ styles.btn } onClick={ () => makeEditable(true) }>Edit</button> 
                }
                <button className={ styles.btn } onClick={ () => deletePost({ variables: { id: post.id }}) } >Delete</button>
            </footer>
        </div>)
    )
}

export default Post