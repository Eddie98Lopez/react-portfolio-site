import React from "react";
import styled from "styled-components";
import { useCounter } from "./Carousel";
import Circle from "./cirlce";

const ICWrapper = styled.div`
  position: absolute;
  z-index:2;
  bottom: 0.15rem;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
`;

const IndexCircles = (props) => {
  const { images, counter, setCounter } = useCounter();

  return (
    <ICWrapper>
      {images.map((item) => {
        return (
          <div
            key={images.indexOf(item)}
            onClick={() => setCounter(images.indexOf(item))}
          >
            <Circle counter={counter} index={images.indexOf(item)} />
          </div>
        );
      })}
    </ICWrapper>
  );
};

export default IndexCircles;
