import React from "react";
import styled from "styled-components";
const CloseWrap = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 35px;
  height: 35px;
  display: grid;
  justify-content: center;
  align-items: center;

  & svg {
    margin: auto;
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.mobile &&
    `
display:none;
@media only screen and (max-width:768px){
  display:block;

}`}
`;

const CloseButton = (props) => {
  return (
    <CloseWrap {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41.012"
        height="41.012"
        viewBox="0 0 41.012 41.012"
      >
        <g
          id="Group_160"
          data-name="Group 160"
          transform="translate(-361.494 -22.494)"
        >
          <rect
            id="Rectangle_242"
            data-name="Rectangle 242"
            width="50"
            height="8"
            transform="translate(361.494 57.849) rotate(-45)"
            fill={props.fill || "#1a3e75"}
          />
          <rect
            id="Rectangle_242-2"
            data-name="Rectangle 242"
            width="50"
            height="8"
            transform="translate(367.151 22.494) rotate(45)"
            fill={props.fill || "#1a3e75"}
          />
        </g>
      </svg>
    </CloseWrap>
  );
};

export default CloseButton;
