import React from "react";
import SocialList from "./SocialList/SocialList";
import styled from "styled-components";
const list = [
  {
    type: "github",
    href: "https://github.com/Eddie98Lopez",
  },
];

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.15rem;
  font-weight: bold;
  width: 100%;
  height: 100%;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    & div,p{
      margin: .5rem auto;
      text-align:center;
      line-height: 2rem;
    }
  }
`;

const UnderConstruction = () => {
  return (
    <Container>
      <div>
        <p>This page is under construction. <br/> Check out my GitHub.</p>
        <SocialList list={list} />
      </div>
    </Container>
  );
};

export default UnderConstruction;
