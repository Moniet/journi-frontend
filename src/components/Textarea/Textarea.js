import React from 'react'
import styles from './Textarea.module.scss'

const Textarea = ({ setValue, value, inputId }) => (
    <textarea id={ inputId } value={ value } onChange={ e => setValue(e.target.value) } className={ styles.textarea }>
    </textarea>
)

export default Textarea