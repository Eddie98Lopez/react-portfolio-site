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
    box-shadow:  0px 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: .25s ease-in;
   & a{
        font-size: 1.5rem;
        
        
    }
}
`

const NavLinks = styled.div`
    margin: auto 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & .close{ 
      display:none;
    }

    @media only screen and (max-width: 768px) {
        display:${props => props.mobile===true? 'flex' : 'none'};
        flex-direction:column;
        transition: ease-in-out .3s;
        align-items:flex-end;
        justify-content: flex-start;
        width: 100%;
        margin:0;
        padding: 1rem 0;
        overflow:hidden;
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.3);
        position:absolute;
      
        left:0;
        background:rgba(255, 255, 255, .98);
        z-index:3;
        animation: fade-in;
       border-top: dashed 1.5px gray;

        & .close{
          display:block;
          color: crimson;
          font-weight:400;
          transform-text: lowercase;
          padding:1rem;
          font-size:1rem;
          margin-right:1rem;
          

        }

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
        cursor:pointer;
    }
    
  }
  
`


   


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
          <div className='close' onClick={()=> setMobile(false)}>close X</div>
          </NavLinks>
          
        </Nav>
        
    )

}

export default Navigation