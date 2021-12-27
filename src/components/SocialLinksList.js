import React from "react";
import SocialLink from "./SocialLink";
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

const SocialLinksList = (props) => {
  const { list } = props;

  return (
    <SocialWrapper>
      {list.map((link) => (
        <SocialLink link={link} />
      ))}
    </SocialWrapper>
  );
};

export default SocialLinksList;
