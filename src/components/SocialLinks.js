import React from "react";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import GitHub from "../assets/GitHub";
import styled from "styled-components";

const SocialWrapper = styled.div`
  text-align: right;
  & a {
    margin: 0 0.25rem;
  }
`;

const SocialLinks = () => {
  const links = ["linkedIn", "instagram", "github"];
  return (
    <SocialWrapper>
      <a href="https://www.linkedin.com/in/eddie98lopez/" target="_blank">
        <LinkedIn />
      </a>
      <a href="https://github.com/Eddie98Lopez" target="_blank">
        <GitHub />
      </a>
      <a href="https://www.instagram.com/eddielopez_art/" target="_blank">
        <Instagram />
      </a>
    </SocialWrapper>
  );
};

export default SocialLinks;
