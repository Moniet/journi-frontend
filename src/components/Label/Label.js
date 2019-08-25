import React from 'react'
import styles from './Label.module.scss'

const Label = ({ value, inputId }) => (
    <label htmlFor={inputId} className={styles.label}> { value } </label>
)

export default Label