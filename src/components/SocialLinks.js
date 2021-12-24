import React from "react";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import GitHub from "../assets/GitHub";
import styled from "styled-components";

const SocialWrapper = styled.div`
  text-align: right;
  & a {
    margin: 0 0.25rem;
    background: ${(props) => props.theme.colors.white};
    
    & svg {
      fill: #c9c9c9;
      transition: 0.3s ease-in-out;

    }
  }

  & a:hover > svg {
    transition: 0.3s ease-in-out;
    fill: ${(props) => props.theme.colors.black};
  }
`;

const SocialLinks = () => {
  return (
    <SocialWrapper>
      <a href="https://www.linkedin.com/in/eddie98lopez/" target="_blank">
        <LinkedIn className="svg" />
      </a>
      <a href="https://github.com/Eddie98Lopez" target="_blank">
        <GitHub className="svg" />
      </a>
      <a href="https://www.instagram.com/eddielopez_art/" target="_blank">
        <Instagram className="svg" />
      </a>
    </SocialWrapper>
  );
};

export default SocialLinks;
