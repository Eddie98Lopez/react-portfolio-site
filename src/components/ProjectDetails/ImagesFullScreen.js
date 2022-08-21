import React from "react";
import Carousel from "../Carousel";
import styled from "styled-components";
import CloseButton from "./close_button"

const FullScreen = styled.div`
  display: grid;
  align-items: center;
  position: fixed;
  z-index: 500;
  padding: 2.5%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);

  & .closeFS {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 1rem;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const ImagesFullScreen = (props) => {
  const { images, active } = props;
  return (
    <FullScreen>
      <Carousel
        images={images}
        active={active}
        height="90vh"
        fit="contain"
        mobileHeight="100%"
      />
      <div
        className="closeFS"
        onClick={() => {
          props.fullScreen.setFullScreen(false);
        }}
      >
        <CloseButton fill="white" />
      </div>
    </FullScreen>
  );
};

export default ImagesFullScreen;
