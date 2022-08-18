import React from "react";
import Arrow from "./arrow";
import { useCounter } from "./Carousel";
import styled from "styled-components";

const ArrowWrapper = styled.div`
  position: absolute;
  z-index: 3;
  opacity: 0.95;
  cursor: default;
  top: 50%;
  transform: translateY(-50%);
/*   background: rgba(0,0,0,.5);
  border-radius:500px; */
  height:3rem;
  width:3rem;
  display:flex;
  justify-content: center;
  align-items:center;
  

  
  & svg{
    filter: drop-shadow(3px 2px 3px rgb(0 0 0 / 0.8));
    width:50%;
    height:50%;
    transform: translateX(-10%);
    
  }

  ${(props) =>
    props.left &&
    `
  left:.5rem;
  `};

  ${(props) =>
    props.right &&
    `
  right:.5rem;
  transform: scaleX(-1) translateY(-50%); 

;
  `};
`;

const ArrowButton = (props) => {
  const { counter, setCounter, images } = useCounter();

  const click = (e) => {
    props.left && setCounter(counter - 1 < 0 ? images.length - 1 : counter - 1);
    props.right && setCounter(counter + 1 >= images.length ? 0 : counter + 1);
  };

  return (
    <ArrowWrapper onClick={click} {...props}>
      <Arrow fill="white" />
    </ArrowWrapper>
  );
};

export default ArrowButton;
