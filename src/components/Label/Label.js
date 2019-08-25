import React from 'react'
import styles from './Label.module.scss'

const Label = ({ value, inputId }) => (
    <label for={inputId} className={styles.label}> { value } </label>
)

export default Label