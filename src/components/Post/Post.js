import React, { useEffect, useRef, useState } from 'react'
import styles from './Post.module.scss'
import { Module } from 'module';
import API from '../../utils/API';

const Post = (post) => {
    const postEl = useRef(null)
    const postHeader = useRef(null)
    const postTitle = useRef(null)
    const postFooter = useRef(null)
    const postBody = useRef(null)
    const token = localStorage.getItem('token')
    const [editable, makeEditable] = useState(false)

    const resize = () => {
        const height = postHeader.current.getBoundingClientRect().height + postFooter.current.getBoundingClientRect().height + postBody.current.getBoundingClientRect().height;
        const rowSpan = Math.ceil(height / 42);
        postEl.current.style.gridRow = `span ${rowSpan}`;
    }

    useEffect(() => {
        resize();
        postBody.current.contentEditable = editable;
        postTitle.current.contentEditable = editable;
        // postTitle.current.style.boxShadow = editable ? '0px 0px 0px 2px pink' : 'none'; 
        // postBody.current.style.boxShadow = editable ? '0px 0px 0px 2px pink' : 'none';
        // if (editable) postEl.current.style.zIndex += 1000;
        // if (!editable) postEl.current.style.zIndex = 0;
    }, [editable])    

    const deletePost = () => {
        return;
    }

    const savePost = () => {
        const title = postTitle.current.textContent
        const body = postBody.current.textContent
        API.editPost(token, post.post.id, title, body)
            .then(makeEditable(false))
    }

    return (
       post ?
        <div ref={postEl} className={ styles.post }>
            <header ref={ postHeader } className={ styles.postHeader } >
                <h2 ref={ postTitle } className={ styles.postTitle }>{ post.post.attributes.title }</h2>
            </header>

            <div ref={postBody} className={ styles.postBody } >
                { post.post.attributes.body }
            </div>

            <footer ref={postFooter} className={styles.postFooter}>
                {   editable 
                    ? <button className={ styles.btnSave } onClick={ () => savePost() }>Save</button>
                    : <button className={ styles.btn } onClick={ () => makeEditable(true) }>Edit</button> 
                }
                <button className={ styles.btn } onClick={ () => deletePost() } >Delete</button>
            </footer>
        </div>
        : ''
    )
}

export default Post