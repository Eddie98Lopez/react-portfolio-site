import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  font-family: ${(props) => props.theme.displayFont};
  grid-template-areas:
    "h . . ."
    "a . . ."
    ". d d d"
    "and . . ."
    ". i i i";
  position: absolute;
  z-index: 12;
  top: 20%;
  left: 1fr;
  transform: translateX(-32.5%);

  & #h {
    grid-area: h;
  }
  & #a {
    grid-area: a;
  }
  & #d {
    grid-area: d;
  }
  & #and {
    grid-area: and;
  }
  & #i {
    grid-area: i;
  }

  & .leftbase {
    text-align: right;
    font-size: 2rem;
  }
  & .rightbase {
    text-align: left;
    font-size: 5rem;
    color: ${(props) => props.theme.colors.white};
  }
  @media only screen and (max-width: 1062px) {
    & .leftbase {
      text-align: right;
      font-size: 1.25rem;
    }
    & .rightbase {
      text-align: left;
      font-size: 3.125rem;
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "h"
      "a"
      "d"
      "and"
      "i";

    position: static;
    transform: translateX(0);
    margin-bottom: 2rem;
    padding: 0 5%;

    & .leftbase {
      text-align: left;
      font-size: 1.5rem;
      color: grey;
    }
    & .rightbase {
      text-align: left;
      font-size: 4rem;
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media only screen and (max-width: 480px) {
    & .leftbase {
      text-align: left;
      font-size: 1.125rem;
    }
    & .rightbase {
      text-align: left;
      font-size: 3rem;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const HeaderLettering = () => {
  return (
    <Wrapper>
      <div id="h" className="leftbase">
        Hello World.
      </div>
      <div id="a" className="leftbase">
        I am a
      </div>
      <div id="d" className="rightbase">
        developer
      </div>
      <div id="and" className="leftbase">
        and an
      </div>
      <div id="i" className="rightbase">
        illustrator
      </div>
    </Wrapper>
  );
};

export default HeaderLettering;
