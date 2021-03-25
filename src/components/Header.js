import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'


const HeaderStyled = styled.header`

height:auto;

& h1 {

    font-family: 'Righteous',sans-serif;
    letter-spacing: 5px;
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
    color: rgb(175, 175, 175);
}

@media only screen and (max-width: 710px){

    h1{
        font-size:1.5rem;
    }

}
`

const HeaderDiv = styled.div`

display:block;
text-align: center;
    position: relative;
    height: 60vh;
    width: auto;
    left: -1%;
    margin: 50px auto;

    @media only screen and (max-width: 768px){

        width:60%;
        height:auto;
    }

& img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    
}
`

const Header = (props)=>{

    return(
        <div>
            <HeaderStyled>
                <HeaderDiv>
                    <img src = {logo} alt='logo fades in'/>
                </HeaderDiv>
                <h1>EDDIE LOPEZ</h1>
            </HeaderStyled>
        </div>
    )

}

export default Header

