import React, { useState,useEffect }  from 'react'
import styled from 'styled-components'
import {useHistory,useLocation} from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../App.css'
import {NavLink} from './Styles'


const Nav = styled.nav`

  
    position:sticky;
    top:0;
    z-index:10;
    width: 100%;
    margin:0px;
    background-color: rgba(255, 255, 255,.9);

@media only screen and (max-width: 768px){
    
    transition: .25s ease-in;
   & a{
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

    @media only screen and (max-width: 768px) {
        display:${props => props.mobile===true? 'flex' : 'none'};
        flex-direction:column;
        transition: ease-in-out .3s;
        width: 100%;
        margin:0;
        position:absolute;
        background:rgba(255,255,255, .98);
        z-index:4;
        animation: fade-in;
      }
    
    `

const MobileNav = styled.div`

display:none;

@media only screen and (max-width: 768px) {
    display:flex;
    justify-content: space-between;
    width:100%;
    background:rgba(186, 186, 186, .8);

    & img{
        padding:.5rem 0;
        height: 40px;
        margin: 0 1rem;
    }
    
  }
  
  @media only screen and (max-width: 500px){
      & img{
          height:25px;
      }
  }`


   


const Navigation = (props)=>{

    const {push} = useHistory()
    const [mobile, setMobile] = useState(false)
    const location = useLocation()

  useEffect(()=>{

    setMobile(false)

  },[location])

    

    return(
        
        <Nav>
            <MobileNav>
              <img src={logo} alt='logo' onClick={()=>{push('/')}} />
              <img  onClick={()=>setMobile(!mobile)}src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg' alt='hamburger-menu'/>
          </MobileNav>
          <NavLinks mobile={mobile}>
          <NavLink  exact to='/'>Home</NavLink>
          <NavLink to='/illustration' color='purple'>Illustration</NavLink>
          <NavLink to='/design' color='orange'>Design</NavLink>
          <NavLink to='/photography' color='teal'>Photography</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          </NavLinks>
          
        </Nav>
        
    )

}

export default Navigation