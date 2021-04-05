import React from 'react'
import styled from 'styled-components'
import Contact from './ContactForm'
import {GenContainer} from './Styles'

const ContactRoute = () =>{

    const style=`display:flex;
                justify-content: center;
                align-items:center;`

    return(
        <GenContainer height={'90vh'} flex={style}>
            <Contact/>
        </GenContainer>
    )
}

export default ContactRoute