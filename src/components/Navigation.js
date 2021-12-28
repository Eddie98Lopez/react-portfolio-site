import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { Nav, NavLinks } from "./styled-components";
import { NavHashLink } from "react-router-hash-link";
import SocialLinksList from "./SocialLinksList";
import { socialsNav } from "../utils";

const Navigation = () => {
  return (
    <Nav>
      <div className="mobile">
        <Logo />
        <div>hamgurger on mobile</div>
      </div>

      <div className="bottom">
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

        <SocialLinksList list={socialsNav}/>
      </div>
    </Nav>
  );
};

export default Navigation;
