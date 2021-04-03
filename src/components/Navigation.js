import React from 'react'
import styled from 'styled-components'
//import './App.css'
import {NavLink} from './Styles'


const Nav = styled.nav`

    top:0;
    z-index:2;
    position:sticky;
    width: 100%;
    margin:0px;
    background-color: rgba(255, 255, 255,.9);

@media only screen and (max-width: 768px){
    
    transition: .3s ease-in;

    a{
        font-size: .95rem;
        padding: 1.25rem;
    }

}
`

const NavLinks = styled.div`
    margin: auto 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    `

   


const Navigation = (props)=>{

    return(
        
        <Nav>
          <NavLinks>
          <NavLink  exact to='/' activeStyle>Home</NavLink>
          <NavLink to='/illustration' color='purple' activeStyle>Illustration</NavLink>
          <NavLink to='/design' color='orange' activeStyle>Design</NavLink>
          <NavLink to='/photography' color='teal' activeStyle>Photography</NavLink>
          <NavLink to='/about' activeStyle>About</NavLink>
          <NavLink to='/contact'activeStyle>Contact</NavLink>
          </NavLinks>
        </Nav>
        
    )

}

export default Navigation