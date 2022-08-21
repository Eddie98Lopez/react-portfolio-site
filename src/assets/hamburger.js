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
  width:30px;
 
  
};
& #Rectangle_10{
  
  border: 2px solid white;
  background:none;
  position:absolute;
  z-index:-1;
  height: 45px;
  width:45px;
  transform:translate(-7.5px);
  border-radius:40px;
  

  
  
};
& #Rectangle_11{
  
  transform: rotate(135deg) ;
  width:30px;  
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
