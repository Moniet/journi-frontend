import React from 'react'
import styles from './Label.module.scss'

const Label = ({ value, forId }) => (
    <label for={forId}> { value } </label>
)

export default Label