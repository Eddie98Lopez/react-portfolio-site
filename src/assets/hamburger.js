import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  height: 40px;
  
  width: 40px;
  position: relative;
  box-sizing: border-box;


  & div {
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    transform-origin: center;
    background: white;
    width: 40px;
    height: 5px;
    border-radius: 2px;
 
    
  }

  ${(props) =>
    props.mobile &&
    `
& #Rectangle_9{
  
  transform: rotate(-135deg);
  position:absolute;
  
};
& #Rectangle_10{
  opacity: 0;
  
  
  height: 0px;
  
};
& #Rectangle_11{
  
  transform: rotate(135deg);
  position:absolute;
  
}`}
`;

const Hamburger = (props) => {
  return (
    <DIV {...props} id="hamburger">
      <div id="Rectangle_9" />
      <div id="Rectangle_10" />
      <div id="Rectangle_11" />
    </DIV>
  );
};

export default Hamburger;
