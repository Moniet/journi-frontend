import React from 'react'

const TextInput = ({ setValue, value, inputId }) => (
    <input
        type="text"
        onChange={ e => setValue(e.target.value) }
        value={ value }
        className="form__input round"
        id={ inputId }
    />
)

export default TextInput 
