
import React from 'react'
import styles from './TextInput.module.scss'

const TextInput = ({ setValue, value }) => (
<input type="text" onChange={ e => setValue(e.target.value) } value={value} />
)

export default TextInput 
