import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/Logo";
import { Nav, NavLinks } from "./styled-components";
import { NavHashLink } from "react-router-hash-link";
import SocialList from "./SocialList/SocialList";
import { socialsNav } from "../utils";
import Hamburger from "../assets/hamburger";



;

const Navigation = () => {
  const [mobile, setMobile] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams()
  console.log(params)

  useEffect(() => {
    setMobile(false);

    
  }, [location]);

  return (
    
    
    <Nav mobile={mobile} className="left">
      
      <div className="mobile">
        <Logo onClick={() => navigate("/#top")} />

        <Hamburger onClick={() => setMobile(!mobile)} />
      </div>
    
      <div className="bottom">
        <NavLinks>
          <div className="main-links">
            <NavHashLink smooth to="/#top">
              Home
            </NavHashLink>
            <NavHashLink smooth to="/#about">
              About
            </NavHashLink>
            <NavHashLink smooth to="/#contact">
              Contact
            </NavHashLink>
          </div>
          <div>
            <NavHashLink to="/portfolio" className="portfolio">
              portfolio
            </NavHashLink>
          </div>
        </NavLinks>
        <SocialList list={socialsNav} className="social" />
      </div>
    </Nav>
    
  );
};

export default Navigation;
