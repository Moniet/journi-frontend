import React from 'react'
import styles from './PasswordInput.module.scss'

const PasswordInput = ({ setValue, value }) => (
    <input type="password" onChange={ setValue } />
)

export default PasswordInput