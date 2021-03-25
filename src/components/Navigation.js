import React from 'react'
import styled from 'styled-components'
//import './App.css'
import {NavLink} from 'react-router-dom'

const ContainerDiv = styled.div`

position:sticky;
top:0;
z-index:2;`




const Nav = styled.nav`

    width: 100%;
    margin:0px;
    background-color: rgba(255, 255, 255,.9);
    

& a {
    padding: 2rem;
    text-decoration: none;
    font-family:'Lato', sans-serif;
    font-weight: 900;
    color: rgb(175, 175, 175);
    cursor: pointer;



    &:hover {
        color: white;
        background-color: grey;
        transition: .3s ease-in;
    }


}

.activeStyle  {
    color: black;

    & :hover{
        color:white
    }
}
.activeStyleP  {
    color: purple;

    & :hover{
        color:white
    }
}
.activeStyleT  {
    color: teal;

    & :hover{
        color:white
    }
}
.activeStyleO {
    color: orange;

    & :hover{
        color:white
    }
}

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
    justify-content: space-around;`


const Navigation = (props)=>{

    return(
        <ContainerDiv>
        <Nav>
          <NavLinks>
          <NavLink  exact to='/' activeClassName='activeStyle'>Home</NavLink>
          <NavLink to='/illustration' id='illustrationLink' activeClassName='activeStyleP'>Illustration</NavLink>
          <NavLink to='/design' id='designLink' activeClassName='activeStyleO'>Design</NavLink>
          <NavLink to='/photography' id='photographyLink' activeClassName='activeStyleT'>Photography</NavLink>
          <NavLink to='/about' activeClassName='activeStyle'>About</NavLink>
          <NavLink to='/contact' activeClassName='activeStyle'>Contact</NavLink>
          </NavLinks>
        </Nav>
        </ContainerDiv>
    )

}

export default Navigation