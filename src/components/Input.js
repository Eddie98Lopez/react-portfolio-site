import React from 'react'
import {StyledInput,Label} from './styled-components'

const Input = (props) => {
    const {name,error} = props
    return (
        <div>
            <Label htmlFor={name}>{name}</Label>
            <StyledInput
            type='text'
            placeholder={name}
            {...props}/>
            <div>{error}</div>
        </div>
    )
}

export default Input
