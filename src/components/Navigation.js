import React, {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo";
import { Nav, NavLinks } from "./styled-components";
import { NavHashLink } from "react-router-hash-link";
import SocialList from "./SocialList/SocialList";
import { socialsNav } from "../utils";
import Hamburger from "../assets/hamburger";

const Navigation = () => {
  const [mobile,setMobile] = useState(false)
  const [hash,setHash]=useState('#top')
  const location = useLocation()

  useEffect(()=>{
    setMobile(false)
    setHash(location.hash)
  },[location])

  console.log(hash)


  


  return (
    <Nav mobile={mobile} className='left'>
      <div className="mobile">
        <Logo />

        <Hamburger onClick={()=>setMobile(!mobile)}/>
        
      </div>

      <div className="bottom" >
        <NavLinks>
          <div>
            <NavHashLink smooth to="/#top" >Home</NavHashLink>
            <NavHashLink smooth to="/#about" >
              About
            </NavHashLink>
            <NavHashLink smooth to="/#contact" >
              Contact
            </NavHashLink>
          </div>
          <div>
            <NavHashLink to="/illustration" >illustration</NavHashLink>
            <NavHashLink to="/web-dev" >webdev</NavHashLink>
          </div>
        </NavLinks>
        <SocialList list={socialsNav} className='social'/>
      </div>
    </Nav>
  );
};

export default Navigation;
