import React from 'react'
// import styles from './PasswordInput.module.scss'

const PasswordInput = ({ setValue, value }) => (
    <input 
        type="password" 
        onChange={ e => setValue(e.target.value) }
        value={ value } 
        className="form__input round"
        autoComplete="on"
    />
)

export default PasswordInput