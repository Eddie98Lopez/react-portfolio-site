import React from "react";
import GalleryThumb from "./GalleryThumb";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 5%;
  ${(props) => props.theme.heading};
  & .images {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4,1fr);

    @media only screen and (max-width: 768px) {
      gap: 0.5rem;
      padding: 0;
      grid-template-columns:repeat(2,1fr);
    }

    & div {
      background: white;
    }
  }
`;

export const QuickGallery = (props) => {
  const { title, array, link } = props;
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="images">
        {array.map((item) => (
          <GalleryThumb project={item} />
        ))}
      </div>

    </Wrapper>
  );
};

export default QuickGallery;
