import React, {useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo";
import { Nav, NavLinks } from "./styled-components";
import { NavHashLink } from "react-router-hash-link";
import SocialList from "./SocialList/SocialList";
import { socialsNav } from "../utils";
import Hamburger from "../assets/hamburger";

const Navigation = () => {
  const [mobile,setMobile] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    setMobile(false)
  },[location])


  return (
    <Nav mobile={mobile}>
      <div className="mobile">
        <Logo />

        <Hamburger onClick={()=>setMobile(!mobile)}/>
        
      </div>

      <div className="bottom" >
        <NavLinks>
          <div>
            <NavHashLink smooth to="/#top">Home</NavHashLink>
            <NavHashLink smooth to="/#about">
              About
            </NavHashLink>
            <NavHashLink smooth to="/#contact">
              Contact
            </NavHashLink>
          </div>
          <div>
            <Link to="/illustration">illustration</Link>
            <Link to="/web-dev">webdev</Link>
          </div>
        </NavLinks>
        <SocialList list={socialsNav} className='social'/>
      </div>
    </Nav>
  );
};

export default Navigation;
